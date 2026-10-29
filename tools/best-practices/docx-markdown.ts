import { escapeMarkdown } from './markdown.ts';
import type { XmlNode } from './xml.ts';

const children = (nodes: XmlNode[], tag: string) => nodes.filter(node => node.tag === tag).flatMap(node => node.children);
const find = (nodes: XmlNode[], tag: string) => nodes.find(node => node.tag === tag);
const attribute = (node: XmlNode | undefined, key: string) => {
  const attributes = node?.attributes ?? {};
  return Object.entries(attributes).find(([name]) => name === `@_${key}` || name.endsWith(`:${key}`))?.[1];
};
const value = (nodes: XmlNode[], tag: string) => attribute(find(nodes, tag), 'val');
const text = (nodes: XmlNode[]): string => nodes.map(node => node.text ?? text(node.children)).join('');
const isList = (block: string) => /^\s*(?:-|\d+\.) /.test(block);
const joinBlocks = (blocks: string[]) => blocks.map((block, i) =>
  (i ? isList(blocks[i - 1]) && isList(block) ? '\n' : '\n\n' : '') + block).join('');

export function docxMarkdown(document: XmlNode[], stylesDocument: XmlNode[], numberingDocument: XmlNode[], relationships: Map<string, string>): string {
  const styles = new Map(children(stylesDocument, 'styles').filter(node => node.tag === 'style').map(node =>
    [attribute(node, 'styleId'), node.children]));
  const numbering = children(numberingDocument, 'numbering');
  const nums = new Map(numbering.filter(node => node.tag === 'num').map(node =>
    [attribute(node, 'numId'), value(node.children, 'abstractNumId')]));
  const abstracts = new Map(numbering.filter(node => node.tag === 'abstractNum').map(node =>
    [attribute(node, 'abstractNumId'), node.children]));

  function styleProperties(id: string | undefined, visited = new Set<string>()): XmlNode[] {
    if (!id || visited.has(id)) return [];
    visited.add(id);
    const style = styles.get(id) ?? [];
    return [...children(style, 'pPr'), ...styleProperties(value(style, 'basedOn'), visited)];
  }

  function inline(nodes: XmlNode[]): string {
    return nodes.map(node => {
      if (node.tag === 't') return escapeMarkdown(text(node.children));
      if (node.tag === 'tab') return ' ';
      if (node.tag === 'br') return ['page', 'column'].includes(attribute(node, 'type') ?? '') ? '' : '<br>';
      if (node.tag === 'cr') return '<br>';
      if (node.tag === 'hyperlink') {
        const label = inline(node.children);
        const href = relationships.get(attribute(node, 'id') ?? '');
        if (href && /^(https?:|mailto:)/i.test(href)) {
          return `[${label}](${href.replace(/[()\s<>]/g, character => encodeURIComponent(character))})`;
        }
        return label;
      }
      if (node.tag === 'r') {
        let content = inline(node.children);
        const properties = children(node.children, 'rPr');
        const enabled = (tag: string) => {
          const item = find(properties, tag);
          return item && !['0', 'false', 'off'].includes(attribute(item, 'val') ?? '');
        };
        const wrap = (marker: string) => content.replace(/^(\s*)(.*?)(\s*)$/s, (_, before: string, middle: string, after: string) =>
          before + marker + middle + marker + after);
        if (content.trim() && enabled('b')) content = wrap('**');
        if (content.trim() && enabled('i')) content = wrap('*');
        return content;
      }
      // Instruction fields, deleted revisions, drawings and layout properties are not body text.
      if (['instrText', 'del', 'rPr', 'pPr', 'drawing', 'pict'].includes(node.tag)) return '';
      return inline(node.children);
    }).join('');
  }

  function paragraph(nodes: XmlNode[]): string {
    const properties = children(nodes, 'pPr');
    const styleId = value(properties, 'pStyle') ?? '';
    const styleName = value(styles.get(styleId) ?? [], 'name') ?? styleId;
    if (/^(toc\s*\d*|toc heading)$/i.test(styleName) || /^TOC(?:\d+|Heading)$/i.test(styleId)) return '';
    const content = inline(nodes).replace(/[ \t]+/g, ' ').trim();
    if (!content || /^(?:<br>)+$/.test(content)) return '';
    const inherited = [...properties, ...styleProperties(styleId)];
    const outline = value(inherited, 'outlineLvl');
    const heading = /heading\s*(\d)/i.exec(styleName);
    let level = outline !== undefined && Number(outline) < 9 ? Number(outline) + 1 : heading ? Number(heading[1]) : null;
    if (/^03_Subhead Body Title$/i.test(styleName)) level = 1;
    if (/^04_Subhead Body$/i.test(styleName)) level = 2;
    // Reserve h1 for the provenance title supplied by the collector.
    if (level) return '#'.repeat(Math.min(level + 1, 6)) + ' ' + content;
    const numProperties = children(inherited, 'numPr');
    const numId = value(numProperties, 'numId');
    const depth = Number(value(numProperties, 'ilvl') ?? 0);
    const levels = abstracts.get(nums.get(numId)) ?? [];
    const levelNode = levels.find(node => node.tag === 'lvl' && Number(attribute(node, 'ilvl')) === depth);
    const format = value(levelNode?.children ?? [], 'numFmt');
    const bulletStyle = /bullet/i.test(styleName);
    const numberedStyle = /number\s*list/i.test(styleName);
    if ((numId && numId !== '0') || bulletStyle || numberedStyle) {
      const marker = format === 'bullet' || (!format && !numberedStyle) ? '-' : '1.';
      return '  '.repeat(Math.min(depth, 8)) + marker + ' ' + content;
    }
    return content;
  }

  function blocks(nodes: XmlNode[]): string[] {
    const result: string[] = [];
    for (const node of nodes) {
      if (node.tag === 'p') {
        const content = paragraph(node.children);
        if (content) result.push(content);
      } else if (node.tag === 'tbl') {
        const rows = node.children.filter(item => item.tag === 'tr').map(row => {
          const cells: string[] = [];
          for (const cell of row.children.filter(item => item.tag === 'tc')) {
            const content = blocks(cell.children).join('<br>').replace(/\n/g, '<br>');
            const span = Number(value(children(cell.children, 'tcPr'), 'gridSpan') ?? 1);
            if (!Number.isInteger(span) || span < 1 || span > 100) throw new Error('Unsupported Word table column span');
            cells.push(content, ...Array(span - 1).fill(''));
          }
          return { cells, header: Boolean(find(children(row.children, 'trPr'), 'tblHeader')) };
        });
        if (!rows.length) continue;
        const width = Math.max(...rows.map(row => row.cells.length));
        if (!width) continue;
        const render = (cells: string[]) => '| ' + Array.from({ length: width }, (_, i) => cells[i] ?? '').join(' | ') + ' |';
        const header = rows[0].header ? rows.splice(0, 1)[0].cells : Array.from({ length: width }, (_, i) => `Column ${i + 1}`);
        result.push([render(header), render(Array(width).fill('---')), ...rows.map(row => render(row.cells))].join('\n'));
      } else if (node.tag === 'sdt') {
        result.push(...blocks(children(node.children, 'sdtContent')));
      } else if (node.tag === 'ins' || node.tag === 'customXml') {
        result.push(...blocks(node.children));
      }
    }
    return result;
  }

  return joinBlocks(blocks(children(children(document, 'document'), 'body'))).trim();
}
