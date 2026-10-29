import { escapeMarkdown } from './markdown.mjs';

const children = (nodes, tag) => nodes.flatMap(node => node[tag] ?? []);
const find = (nodes, tag) => nodes.find(node => Object.hasOwn(node, tag));
const attribute = (node, key) => {
  const attributes = node?.[':@'] ?? {};
  return Object.entries(attributes).find(([name]) => name === `@_${key}` || name.endsWith(`:${key}`))?.[1];
};
const value = (nodes, tag) => attribute(find(nodes, tag), 'val');
const text = nodes => nodes.map(node => node['#text'] ?? Object.entries(node)
  .filter(([tag]) => tag !== ':@').map(([, content]) => Array.isArray(content) ? text(content) : '').join('')).join('');
const isList = block => /^\s*(?:-|\d+\.) /.test(block);
const joinBlocks = blocks => blocks.map((block, i) =>
  (i ? isList(blocks[i - 1]) && isList(block) ? '\n' : '\n\n' : '') + block).join('');

export function docxMarkdown(document, stylesDocument, numberingDocument, relationships) {
  const styles = new Map(children(stylesDocument, 'styles').filter(node => node.style).map(node =>
    [attribute(node, 'styleId'), node.style]));
  const numbering = children(numberingDocument, 'numbering');
  const nums = new Map(numbering.filter(node => node.num).map(node =>
    [attribute(node, 'numId'), value(node.num, 'abstractNumId')]));
  const abstracts = new Map(numbering.filter(node => node.abstractNum).map(node =>
    [attribute(node, 'abstractNumId'), node.abstractNum]));

  function styleProperties(id, visited = new Set()) {
    if (!id || visited.has(id)) return [];
    visited.add(id);
    const style = styles.get(id) ?? [];
    return [...children(style, 'pPr'), ...styleProperties(value(style, 'basedOn'), visited)];
  }

  function inline(nodes) {
    return nodes.map(node => {
      if (node.t) return escapeMarkdown(text(node.t));
      if (node.tab) return ' ';
      if (node.br) return ['page', 'column'].includes(attribute(node, 'type')) ? '' : '<br>';
      if (node.cr) return '<br>';
      if (node.hyperlink) {
        const label = inline(node.hyperlink);
        const href = relationships.get(attribute(node, 'id'));
        if (href && /^(https?:|mailto:)/i.test(href)) {
          return `[${label}](${href.replace(/[()\s<>]/g, character => encodeURIComponent(character))})`;
        }
        return label;
      }
      if (node.r) {
        let content = inline(node.r);
        const properties = children(node.r, 'rPr');
        const enabled = tag => {
          const item = find(properties, tag);
          return item && !['0', 'false', 'off'].includes(attribute(item, 'val'));
        };
        const wrap = marker => content.replace(/^(\s*)(.*?)(\s*)$/s, (_, before, middle, after) =>
          before + marker + middle + marker + after);
        if (content.trim() && enabled('b')) content = wrap('**');
        if (content.trim() && enabled('i')) content = wrap('*');
        return content;
      }
      // Instruction fields, deleted revisions, drawings and layout properties are not body text.
      if (node.instrText || node.del || node.rPr || node.pPr || node.drawing || node.pict) return '';
      return Object.entries(node).filter(([tag]) => tag !== ':@')
        .map(([, content]) => Array.isArray(content) ? inline(content) : '').join('');
    }).join('');
  }

  function paragraph(nodes) {
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
    const levelNode = levels.find(node => node.lvl && Number(attribute(node, 'ilvl')) === depth);
    const format = value(levelNode?.lvl ?? [], 'numFmt');
    const bulletStyle = /bullet/i.test(styleName);
    const numberedStyle = /number\s*list/i.test(styleName);
    if ((numId && numId !== '0') || bulletStyle || numberedStyle) {
      const marker = format === 'bullet' || (!format && !numberedStyle) ? '-' : '1.';
      return '  '.repeat(Math.min(depth, 8)) + marker + ' ' + content;
    }
    return content;
  }

  function blocks(nodes) {
    const result = [];
    for (const node of nodes) {
      if (node.p) {
        const content = paragraph(node.p);
        if (content) result.push(content);
      } else if (node.tbl) {
        const rows = node.tbl.filter(item => item.tr).map(row => {
          const cells = [];
          for (const cell of row.tr.filter(item => item.tc)) {
            const content = blocks(cell.tc).join('<br>').replace(/\n/g, '<br>');
            const span = Number(value(children(cell.tc, 'tcPr'), 'gridSpan') ?? 1);
            if (!Number.isInteger(span) || span < 1 || span > 100) throw new Error('Unsupported Word table column span');
            cells.push(content, ...Array(span - 1).fill(''));
          }
          return { cells, header: Boolean(find(children(row.tr, 'trPr'), 'tblHeader')) };
        });
        if (!rows.length) continue;
        const width = Math.max(...rows.map(row => row.cells.length));
        if (!width) continue;
        const render = cells => '| ' + Array.from({ length: width }, (_, i) => cells[i] ?? '').join(' | ') + ' |';
        const header = rows[0].header ? rows.shift().cells : Array.from({ length: width }, (_, i) => `Column ${i + 1}`);
        result.push([render(header), render(Array(width).fill('---')), ...rows.map(row => render(row.cells))].join('\n'));
      } else if (node.sdt) {
        result.push(...blocks(children(node.sdt, 'sdtContent')));
      } else if (node.ins || node.customXml) {
        result.push(...blocks(node.ins ?? node.customXml));
      }
    }
    return result;
  }

  return joinBlocks(blocks(children(children(document, 'document'), 'body'))).trim();
}
