import assert from 'node:assert/strict';
import { test } from 'node:test';
import { zipSync, strToU8 } from 'fflate';
import { extractMarkdown } from '../extract-text.mjs';

const p = (content, properties = '') => `<w:p><w:pPr>${properties}</w:pPr>${content}</w:p>`;
const run = text => `<w:r><w:t xml:space="preserve">${text}</w:t></w:r>`;
const style = id => `<w:pStyle w:val="${id}"/>`;
function document(body, extras = {}) {
  const files = {
    'word/document.xml': `<w:document xmlns:w="urn:w" xmlns:r="urn:r"><w:body>${body}</w:body></w:document>`,
    ...extras,
  };
  return zipSync(Object.fromEntries(Object.entries(files).map(([name, value]) => [name, strToU8(value)])));
}

test('DOCX removes TOC fields and layout whitespace while preserving headings and list structure', async () => {
  const data = document(
    p(run('Table of Contents'), style('TOCHeading')) +
    p('<w:r><w:instrText>TOC PAGEREF _Toc123</w:instrText><w:t>Intro 4</w:t></w:r>', style('TOC1')) +
    p('') + p('<w:r><w:br w:type="page"/></w:r>') +
    p(run('Introduction'), style('CustomHeading')) +
    p(run('First objective'), style('Bullet')) +
    p(run('Second objective'), style('Bullet')) +
    p(run('First step'), '<w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr>'),
    {
      'word/styles.xml': `<w:styles xmlns:w="urn:w">
        <w:style w:styleId="CustomHeading"><w:name w:val="03_Subhead Body Title"/></w:style>
        <w:style w:styleId="Bullet"><w:name w:val="06_Bullets"/></w:style></w:styles>`,
      'word/numbering.xml': `<w:numbering xmlns:w="urn:w">
        <w:abstractNum w:abstractNumId="7"><w:lvl w:ilvl="0"><w:numFmt w:val="decimal"/></w:lvl></w:abstractNum>
        <w:num w:numId="1"><w:abstractNumId w:val="7"/></w:num></w:numbering>`,
    });
  const result = await extractMarkdown(data, 'guide.docx');
  assert.equal(result, '## Introduction\n\n- First objective\n- Second objective\n1. First step');
  assert.doesNotMatch(result, /TOC|PAGEREF|_Toc|\n{3}/);
});

test('DOCX tables retain all multi-paragraph cell content in the correct column', async () => {
  const cell = content => `<w:tc>${content}</w:tc>`;
  const data = document(`<w:tbl><w:tr><w:trPr><w:tblHeader/></w:trPr>
    ${cell(p(run('Role')))}${cell(p(run('Responsibilities')))}</w:tr>
    <w:tr>${cell(p(run('Owner')))}${cell(p(run('Maintain process')) + p(run('Report metrics')))}</w:tr></w:tbl>`);
  assert.equal(await extractMarkdown(data, 'guide.docx'),
    '| Role | Responsibilities |\n| --- | --- |\n| Owner | Maintain process<br>Report metrics |');
});

test('DOCX retains emphasis spacing, hyperlinks and field results without instruction codes', async () => {
  const data = document(p(run('Read ') +
    '<w:r><w:rPr><w:b/></w:rPr><w:t xml:space="preserve">this </w:t></w:r>' +
    run('guide: ') + '<w:hyperlink r:id="link">' + run('Documentation') + '</w:hyperlink>' +
    '<w:r><w:instrText>HYPERLINK https://example.com</w:instrText></w:r>'), {
    'word/_rels/document.xml.rels': '<Relationships><Relationship Id="link" Type="https://example/hyperlink" Target="https://example.com/docs" TargetMode="External"/></Relationships>',
  });
  assert.equal(await extractMarkdown(data, 'guide.docx'), 'Read **this** guide: [Documentation](https://example.com/docs)');
});

test('plain text conversion collapses blank runs without joining distinct paragraphs', async () => {
  assert.equal(await extractMarkdown(strToU8('First\n\n\n\nSecond  \n\n'), 'guide.txt'), 'First\n\nSecond');
});
