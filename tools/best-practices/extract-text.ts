import path from 'node:path';
import { unzipSync } from 'fflate';
import type { Unzipped } from 'fflate';
import { docxMarkdown } from './docx-markdown.ts';
import { escapeMarkdown, toMarkdown } from './markdown.ts';
import { elements, object, requiredScalar, scalar, xml } from './xml.ts';
import type { XmlNode, XmlObject, XmlValue } from './xml.ts';

export const SUPPORTED = new Set(['.docx', '.pptx', '.xlsx', '.pdf', '.xml', '.txt', '.md', '.zip']);
const MAX_BYTES = 100 * 1024 * 1024;
const MAX_DEPTH = 3;

async function member(archive: Unzipped, name: string): Promise<string> {
  const file = Object.hasOwn(archive, name) ? archive[name] : undefined;
  if (!file) throw new Error(`Missing archive member: ${name}`);
  return new TextDecoder('utf-8', { fatal: true }).decode(file);
}

function relationshipId(node: XmlObject): string {
  return requiredScalar(Object.entries(node).find(([key]) => key.startsWith('@_') && key.endsWith(':id'))?.[1]);
}

function plainText(nodes: XmlNode[]): string {
  return nodes.map(node => {
    if (node.tag === '#text') return node.text ?? '';
    if (node.tag === 'tab') return '\t';
    if (node.tag === 'br') return '\n';
    const text = plainText(node.children);
    if (node.tag === 'p' || node.tag === 'tr') return text + '\n';
    if (node.tag === 'tc') return text.trimEnd() + '\t';
    return text;
  }).join('');
}

async function relationships(archive: Unzipped, source: string): Promise<Map<string, { target: string; type: string }>> {
  const directory = path.posix.dirname(source);
  const relPath = `${directory}/_rels/${path.posix.basename(source)}.rels`;
  if (!Object.hasOwn(archive, relPath)) return new Map();
  const result = new Map<string, { target: string; type: string }>();
  const document = xml(await member(archive, relPath));
  for (const relation of elements(object(document.Relationships).Relationship)) {
    if (relation['@_TargetMode'] === 'External') continue;
    const raw = relation['@_Target'];
    if (typeof raw !== 'string') throw new Error('Missing relationship target');
    const target = raw.startsWith('/') ? raw.slice(1) : path.posix.join(directory, raw);
    if (target.startsWith('../') || target.includes('\\')) throw new Error('Relationship escapes archive');
    result.set(requiredScalar(relation['@_Id']), { target, type: requiredScalar(relation['@_Type']) });
  }
  return result;
}

function columnIndex(reference: string): number {
  const match = /^([A-Z]+)[1-9]\d*$/.exec(reference);
  if (!match) throw new Error(`Invalid spreadsheet cell reference: ${reference}`);
  let index = 0;
  for (const letter of match[1]) index = index * 26 + letter.charCodeAt(0) - 64;
  if (index > 16384) throw new Error('Spreadsheet column exceeds XLSX limits');
  return index - 1;
}

function richString(value: XmlValue | undefined): string {
  if (value === undefined) return '';
  if (typeof value === 'string') return value;
  const node = object(value);
  return (typeof node.t === 'string' ? node.t : scalar(object(node.t)['#text']) ?? '') +
    elements(node.r).map(r => typeof r.t === 'string' ? r.t : scalar(object(r.t)['#text']) ?? '').join('');
}

async function officeText(archive: Unzipped, suffix: string): Promise<string> {
  const sections = [];
  if (suffix === '.docx') {
    sections.push(plainText(xml(await member(archive, 'word/document.xml'), true)).trim());
    for (const name of Object.keys(archive).sort()) {
      if (/^word\/(?:header|footer)\d+\.xml$/.test(name)) {
        const text = plainText(xml(await member(archive, name), true)).trim();
        if (text) sections.push(`--- ${name} ---\n${text}`);
      }
    }
  } else if (suffix === '.pptx') {
    const document = xml(await member(archive, 'ppt/presentation.xml'));
    const relations = await relationships(archive, 'ppt/presentation.xml');
    for (const [i, slideId] of elements(object(object(document.presentation).sldIdLst).sldId).entries()) {
      const relation = relations.get(relationshipId(slideId));
      if (!relation) throw new Error('Slide relationship is missing');
      const text = plainText(xml(await member(archive, relation.target), true)).trim();
      const slide = [text];
      for (const notes of (await relationships(archive, relation.target)).values()) {
        if (notes.type?.endsWith('/notesSlide')) {
          const noteText = plainText(xml(await member(archive, notes.target), true)).trim();
          if (noteText) slide.push(`[Speaker notes]\n${noteText}`);
        }
      }
      if (slide.some(Boolean)) sections.push(`--- Slide ${i + 1} ---\n${slide.filter(Boolean).join('\n')}`);
    }
  } else {
    const workbook = xml(await member(archive, 'xl/workbook.xml'));
    const relations = await relationships(archive, 'xl/workbook.xml');
    const strings = Object.hasOwn(archive, 'xl/sharedStrings.xml')
      ? elements(object(xml(await member(archive, 'xl/sharedStrings.xml')).sst).si).map(richString) : [];
    for (const sheet of elements(object(object(workbook.workbook).sheets).sheet)) {
      const relation = relations.get(relationshipId(sheet));
      if (!relation) throw new Error('Sheet relationship is missing');
      const document = xml(await member(archive, relation.target));
      const rows = [];
      for (const row of elements(object(object(document.worksheet).sheetData).row)) {
        const cells: string[] = [];
        for (const cell of elements(row.c)) {
          const index = columnIndex(requiredScalar(cell['@_r']));
          let value = scalar(cell.v) ?? '';
          if (cell.f !== undefined) {
            const formula = typeof cell.f === 'string' ? cell.f : scalar(object(cell.f)['#text']);
            if (!formula) throw new Error(`Shared/empty formula requires manual review: ${cell['@_r']}`);
            value = `=${formula}`;
          } else if (cell['@_t'] === 's') {
            if (!/^\d+$/.test(value) || strings[Number(value)] === undefined) {
              throw new Error(`Invalid shared-string index: ${value}`);
            }
            value = strings[Number(value)];
          } else if (cell['@_t'] === 'inlineStr') value = richString(cell.is);
          cells[index] = String(value);
        }
        if (cells.some(Boolean)) rows.push(`Row ${row['@_r']}\t${Array.from(cells, cell => cell ?? '').join('\t')}`);
      }
      if (rows.length) sections.push(`--- Sheet: ${sheet['@_name']} ---\n${rows.join('\n')}`);
    }
  }
  return sections.filter(Boolean).join('\n\n');
}

export async function extractText(data: Uint8Array, filename: string, depth = 0, budget = { remaining: MAX_BYTES }, markdown = false): Promise<string> {
  const suffix = path.extname(filename).toLowerCase();
  if (!SUPPORTED.has(suffix)) throw new Error(`Unsupported format: ${suffix || '(no extension)'}`);
  if (data.length > MAX_BYTES) throw new Error('Document exceeds the 100 MiB extraction limit');
  let text;
  if (['.txt', '.md'].includes(suffix)) {
    text = new TextDecoder('utf-8', { fatal: true }).decode(data);
  } else if (suffix === '.pdf') {
    const { getDocument } = await import('pdfjs-dist/legacy/build/pdf.mjs');
    const task = getDocument({ data: new Uint8Array(data), useSystemFonts: true });
    const document = await task.promise;
    try {
      const pages = [];
      for (let i = 1; i <= document.numPages; i++) {
        const page = await document.getPage(i);
        const content = await page.getTextContent();
        const body = content.items.filter(item => 'str' in item)
          .map(item => item.str + (item.hasEOL ? '\n' : ' ')).join('').trim();
        if (!body) throw new Error(`PDF page ${i} has no extractable text; OCR/manual review required`);
        pages.push(`--- Page ${i} ---\n${body}`);
      }
      text = pages.join('\n\n');
    } finally {
      await task.destroy();
    }
  } else if (suffix === '.xml') {
    const document = xml(new TextDecoder('utf-8', { fatal: true }).decode(data), true);
    const lines: string[] = [];
    const visit = (nodes: XmlNode[], parents: string[] = []): void => {
      for (const node of nodes) {
        if (node.tag.startsWith('?')) continue;
        if (node.tag === '#text') {
          if (node.text?.trim()) lines.push(`${parents.join('/')}: ${node.text.trim()}`);
        } else visit(node.children, [...parents, node.tag]);
      }
    };
    visit(document);
    text = lines.join('\n');
  } else {
    const names = new Set();
    const archive = unzipSync(new Uint8Array(data), {
      filter(entry) {
        if (names.has(entry.name)) throw new Error(`Duplicate archive member: ${entry.name}`);
        names.add(entry.name);
        if (!Number.isSafeInteger(entry.originalSize) || entry.originalSize > budget.remaining) {
          throw new Error('Archive exceeds the 100 MiB cumulative expanded-size limit');
        }
        budget.remaining -= entry.originalSize;
        return !entry.name.endsWith('/');
      },
    });
    if (suffix === '.zip') {
      if (depth >= MAX_DEPTH) throw new Error('Nested archive depth exceeds extraction limit');
      const sections = [];
      for (const [name, content] of Object.entries(archive)) {
        if (!SUPPORTED.has(path.extname(name).toLowerCase())) {
          throw new Error(`Archive member requires manual review: ${name}`);
        }
        sections.push((markdown ? `## Archive member: ${escapeMarkdown(name)}\n\n` : `--- Archive member: ${name} ---\n`) +
          await extractText(content, name, depth + 1, budget, markdown));
      }
      text = sections.join('\n\n');
    } else if (markdown && suffix === '.docx') {
      const optionalXml = async (name: string): Promise<XmlNode[]> => Object.hasOwn(archive, name) ? xml(await member(archive, name), true) : [];
      const links = new Map<string, string>();
      if (Object.hasOwn(archive, 'word/_rels/document.xml.rels')) {
        const rels = xml(await member(archive, 'word/_rels/document.xml.rels'));
        for (const relation of elements(object(rels.Relationships).Relationship)) {
          if (scalar(relation['@_Type'])?.endsWith('/hyperlink')) links.set(requiredScalar(relation['@_Id']), requiredScalar(relation['@_Target']));
        }
      }
      text = docxMarkdown(xml(await member(archive, 'word/document.xml'), true),
        await optionalXml('word/styles.xml'), await optionalXml('word/numbering.xml'), links);
    } else text = await officeText(archive, suffix);
  }
  if (!text?.trim()) throw new Error('No extractable text; manual review required');
  return markdown && !['.docx', '.md', '.zip'].includes(suffix) ? toMarkdown(text) : text.trim();
}

export function extractMarkdown(data: Uint8Array, filename: string): Promise<string> {
  return extractText(data, filename, 0, { remaining: MAX_BYTES }, true);
}
