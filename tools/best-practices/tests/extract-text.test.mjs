import assert from 'node:assert/strict';
import { test } from 'node:test';
import { zipSync, strToU8 } from 'fflate';
import { extractText } from '../extract-text.mjs';

const zip = files => zipSync(Object.fromEntries(Object.entries(files).map(
  ([name, content]) => [name, typeof content === 'string' ? strToU8(content) : content]
)));
const rels = body => `<Relationships>${body}</Relationships>`;
const drawing = text => `<a:root xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:p><a:r><a:t>${text}</a:t></a:r></a:p></a:root>`;

test('DOCX preserves paragraph/table order, Unicode and headers', async () => {
  const document = zip({
    'word/document.xml': `<w:document xmlns:w="urn:word"><w:body>
      <w:p><w:r><w:t>Start</w:t></w:r></w:p>
      <w:tbl><w:tr><w:tc><w:p><w:r><w:t>Role</w:t></w:r></w:p></w:tc><w:tc><w:p><w:r><w:t>Owner</w:t></w:r></w:p></w:tc></w:tr></w:tbl>
      <w:p><w:r><w:t>Slut: åäö &amp; review</w:t></w:r></w:p>
      </w:body></w:document>`,
    'word/header1.xml': '<w:hdr xmlns:w="urn:word"><w:p><w:r><w:t>Process guide</w:t></w:r></w:p></w:hdr>',
  });
  const text = await extractText(document, 'guide.docx');
  assert.match(text, /Role\tOwner/);
  assert.ok(text.indexOf('Start') < text.indexOf('Role'));
  assert.ok(text.indexOf('Owner') < text.indexOf('Slut'));
  assert.match(text, /åäö & review/);
  assert.match(text, /word\/header1.xml ---\nProcess guide/);
});

test('PPTX follows slide order and actual note relationships, not numeric filenames', async () => {
  const document = zip({
    'ppt/presentation.xml': '<p:presentation xmlns:p="urn:p" xmlns:r="urn:r"><p:sldIdLst><p:sldId r:id="rId5" id="123"/></p:sldIdLst></p:presentation>',
    'ppt/_rels/presentation.xml.rels': rels('<Relationship Id="rId5" Type="slide" Target="slides/slide3.xml"/>'),
    'ppt/slides/slide3.xml': drawing('Workshop'),
    'ppt/slides/_rels/slide3.xml.rels': rels('<Relationship Id="notes" Type="http://example/notesSlide" Target="../notesSlides/notesSlide8.xml"/>'),
    'ppt/notesSlides/notesSlide8.xml': drawing('Discuss ownership'),
  });
  const text = await extractText(document, 'workshop.pptx');
  assert.match(text, /--- Slide 1 ---\nWorkshop/);
  assert.match(text, /\[Speaker notes\]\nDiscuss ownership/);
});

test('XLSX preserves sheet names, shared/inline strings, sparse columns and formulas', async () => {
  const document = zip({
    'xl/workbook.xml': '<workbook xmlns:r="urn:r"><sheets><sheet r:id="rId3" sheetId="7" name="Acceptance criteria"/></sheets></workbook>',
    'xl/_rels/workbook.xml.rels': rels('<Relationship Id="rId3" Type="worksheet" Target="worksheets/sheet9.xml"/>'),
    'xl/sharedStrings.xml': '<sst><si><r><t>Story </t></r><r><t>one</t></r></si></sst>',
    'xl/worksheets/sheet9.xml': '<worksheet><sheetData><row r="2"><c r="A2" t="s"><v>0</v></c><c r="C2"><f>1+1</f><v>2</v></c><c r="D2" t="inlineStr"><is><t>Done</t></is></c></row></sheetData></worksheet>',
  });
  const text = await extractText(document, 'stories.xlsx');
  assert.match(text, /--- Sheet: Acceptance criteria ---/);
  assert.match(text, /Row 2\tStory one\t\t=1\+1\tDone/);
});

test('XML emits field paths and rejects external entities', async () => {
  assert.equal(await extractText(strToU8('<Project><Tasks><Task><Name>Plan</Name></Task></Tasks></Project>'), 'plan.xml'),
    'Project/Tasks/Task/Name: Plan');
  await assert.rejects(extractText(strToU8('<!DOCTYPE a [<!ENTITY secret SYSTEM "file:///etc/passwd">]><a>&secret;</a>'), 'bad.xml'), /DTD/);
  await assert.rejects(extractText(strToU8('<Project>broken'), 'broken.xml'), /Invalid XML/);
});

test('ZIP reads supported members without unpacking their paths', async () => {
  const text = await extractText(zip({ '../guide.txt': 'Process overview' }), 'workbook.zip');
  assert.match(text, /Process overview/);
  await assert.rejects(extractText(zip({ 'diagram.png': 'not a document' }), 'workbook.zip'), /manual review/);
});

test('nested archives share an expansion budget and enforce depth', async () => {
  await assert.rejects(extractText(zip({ 'a.txt': '12345' }), 'workbook.zip', 0, { remaining: 4 }), /expanded-size limit/);
  let nested = strToU8('Deep');
  for (let i = 0; i < 5; i++) nested = zip({ [i === 0 ? 'a.txt' : 'nested.zip']: nested });
  await assert.rejects(extractText(nested, 'nested.zip'), /depth/);
});

function pdf(blank = false) {
  const stream = blank ? '' : 'BT /F1 12 Tf 10 250 Td (Process owner) Tj ET';
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 300 300] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
  ];
  let content = '%PDF-1.4\n';
  const offsets = [0];
  for (let i = 0; i < objects.length; i++) {
    offsets.push(content.length);
    content += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }
  const xref = content.length;
  content += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  content += offsets.slice(1).map(offset => `${String(offset).padStart(10, '0')} 00000 n \n`).join('');
  content += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return Buffer.from(content);
}

test('PDF retains page markers and reports empty/scanned pages', async () => {
  assert.match(await extractText(pdf(), 'guide.pdf'), /--- Page 1 ---\nProcess owner/);
  await assert.rejects(extractText(pdf(true), 'scan.pdf'), /page 1.*OCR/);
});

test('empty, malformed and unsupported files are explicit failures', async () => {
  await assert.rejects(extractText(new Uint8Array(), 'empty.txt'), /No extractable text/);
  await assert.rejects(extractText(strToU8('bad'), 'bad.docx'));
  await assert.rejects(extractText(strToU8('bad'), 'bad.exe'), /Unsupported/);
  await assert.rejects(extractText(zip({ 'word/document.xml': '<document/>' }), 'empty.docx'), /No extractable text/);
});
