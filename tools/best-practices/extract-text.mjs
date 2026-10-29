import path from 'node:path';
import { unzipSync } from 'fflate';
import { XMLParser, XMLValidator } from 'fast-xml-parser';
import { docxMarkdown } from './docx-markdown.mjs';
import { escapeMarkdown, toMarkdown } from './markdown.mjs';

export const SUPPORTED = new Set(['.docx', '.pptx', '.xlsx', '.pdf', '.xml', '.txt', '.md', '.zip']);
const MAX_BYTES = 100 * 1024 * 1024;
const MAX_DEPTH = 3;
const list = value => value === undefined ? [] : Array.isArray(value) ? value : [value];

function xml(source, ordered = false) {
  // Office files and project plans do not need DTDs or custom entities.
  if (/<!DOCTYPE|<!ENTITY/i.test(source)) throw new Error('XML declarations with DTDs/entities are not supported');
  const valid = XMLValidator.validate(source);
  if (valid !== true) throw new Error(`Invalid XML: ${valid.err.msg}`);
  return new XMLParser({
    ignoreAttributes: false, transformTagName: name => name.split(':').at(-1), parseTagValue: false,
    parseAttributeValue: false, preserveOrder: ordered, trimValues: false,
  }).parse(source);
}

async function member(archive, name) {
  const file = Object.hasOwn(archive, name) ? archive[name] : undefined;
  if (!file) throw new Error(`Missing archive member: ${name}`);
  return new TextDecoder('utf-8', { fatal: true }).decode(file);
}

function relationshipId(node) {
  return Object.entries(node).find(([key]) => key.startsWith('@_') && key.endsWith(':id'))?.[1];
}

function plainText(nodes) {
  return list(nodes).map(node => {
    if (typeof node === 'string') return node;
    return Object.entries(node).map(([tag, value]) => {
      if (tag === ':@') return '';
      if (tag === '#text') return value;
      if (tag === 'tab') return '\t';
      if (tag === 'br') return '\n';
      const text = plainText(value);
      if (tag === 'p' || tag === 'tr') return text + '\n';
      if (tag === 'tc') return text.trimEnd() + '\t';
      return text;
    }).join('');
  }).join('');
}

async function relationships(archive, source) {
  const directory = path.posix.dirname(source);
  const relPath = `${directory}/_rels/${path.posix.basename(source)}.rels`;
  if (!Object.hasOwn(archive, relPath)) return new Map();
  const result = new Map();
  const document = xml(await member(archive, relPath));
  for (const relation of list(document.Relationships?.Relationship)) {
    if (relation['@_TargetMode'] === 'External') continue;
    const raw = relation['@_Target'];
    if (typeof raw !== 'string') throw new Error('Missing relationship target');
    const target = raw.startsWith('/') ? raw.slice(1) : path.posix.join(directory, raw);
    if (target.startsWith('../') || target.includes('\\')) throw new Error('Relationship escapes archive');
    result.set(relation['@_Id'], { target, type: relation['@_Type'] });
  }
  return result;
}

function columnIndex(reference) {
  const match = /^([A-Z]+)[1-9]\d*$/.exec(reference);
  if (!match) throw new Error(`Invalid spreadsheet cell reference: ${reference}`);
  let index = 0;
  for (const letter of match[1]) index = index * 26 + letter.charCodeAt(0) - 64;
  if (index > 16384) throw new Error('Spreadsheet column exceeds XLSX limits');
  return index - 1;
}

function richString(value) {
  if (value === undefined) return '';
  if (typeof value === 'string') return value;
  return (typeof value.t === 'string' ? value.t : value.t?.['#text'] ?? '') +
    list(value.r).map(r => typeof r.t === 'string' ? r.t : r.t?.['#text'] ?? '').join('');
}

async function officeText(archive, suffix) {
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
    for (const [i, slideId] of list(document.presentation?.sldIdLst?.sldId).entries()) {
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
      ? list(xml(await member(archive, 'xl/sharedStrings.xml')).sst?.si).map(richString) : [];
    for (const sheet of list(workbook.workbook?.sheets?.sheet)) {
      const relation = relations.get(relationshipId(sheet));
      if (!relation) throw new Error('Sheet relationship is missing');
      const document = xml(await member(archive, relation.target));
      const rows = [];
      for (const row of list(document.worksheet?.sheetData?.row)) {
        const cells = [];
        for (const cell of list(row.c)) {
          const index = columnIndex(cell['@_r']);
          let value = cell.v ?? '';
          if (cell.f !== undefined) {
            const formula = typeof cell.f === 'string' ? cell.f : cell.f['#text'];
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

export async function extractText(data, filename, depth = 0, budget = { remaining: MAX_BYTES }, markdown = false) {
  const suffix = path.extname(filename).toLowerCase();
  if (!SUPPORTED.has(suffix)) throw new Error(`Unsupported format: ${suffix || '(no extension)'}`);
  if (data.length > MAX_BYTES) throw new Error('Document exceeds the 100 MiB extraction limit');
  let text;
  if (['.txt', '.md'].includes(suffix)) {
    text = new TextDecoder('utf-8', { fatal: true }).decode(data);
  } else if (suffix === '.pdf') {
    const { getDocument } = await import('pdfjs-dist/legacy/build/pdf.mjs');
    const task = getDocument({ data: new Uint8Array(data), useSystemFonts: true, isEvalSupported: false });
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
    const lines = [];
    const visit = (nodes, parents = []) => {
      for (const node of list(nodes)) {
        for (const [tag, value] of Object.entries(node)) {
          if (tag === ':@' || tag.startsWith('?')) continue;
          if (tag === '#text') {
            if (String(value).trim()) lines.push(`${parents.join('/')}: ${String(value).trim()}`);
          } else visit(value, [...parents, tag]);
        }
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
      const optionalXml = async name => Object.hasOwn(archive, name) ? xml(await member(archive, name), true) : [];
      const links = new Map();
      if (Object.hasOwn(archive, 'word/_rels/document.xml.rels')) {
        const rels = xml(await member(archive, 'word/_rels/document.xml.rels'));
        for (const relation of list(rels.Relationships?.Relationship)) {
          if (relation['@_Type']?.endsWith('/hyperlink')) links.set(relation['@_Id'], relation['@_Target']);
        }
      }
      text = docxMarkdown(xml(await member(archive, 'word/document.xml'), true),
        await optionalXml('word/styles.xml'), await optionalXml('word/numbering.xml'), links);
    } else text = await officeText(archive, suffix);
  }
  if (!text?.trim()) throw new Error('No extractable text; manual review required');
  return markdown && !['.docx', '.md', '.zip'].includes(suffix) ? toMarkdown(text) : text.trim();
}

export function extractMarkdown(data, filename) {
  return extractText(data, filename, 0, { remaining: MAX_BYTES }, true);
}
