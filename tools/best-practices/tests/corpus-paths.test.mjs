import assert from 'node:assert/strict';
import { test } from 'node:test';
import { markdownPath } from '../corpus-paths.mjs';

const record = {
  url: 'https://mynow.servicenow.com/now/best-practices/assets/change-management-process-guide',
  originalFilename: 'Change Management - Process Guide.docx',
  title: 'Change Management Process Guide', categories: ['Process Guide'],
};

test('original filename determines Markdown name and catalog determines topic', () => {
  assert.equal(markdownPath(record), 'markdown/change-management/change-management-process-guide.md');
  assert.equal(markdownPath({ ...record, title: 'Change Management - Process Workshop',
    originalFilename: 'Change Management - Process Workshop Presentation.pptx' }),
  'markdown/change-management/change-management-process-workshop-presentation.md');
  assert.equal(markdownPath({ ...record, title: 'Continual Improvement Management - Process Guide',
    originalFilename: 'CIM - Process Guide.docx' }),
  'markdown/continual-improvement-management/cim-process-guide.md');
});

test('filenames are normalized, retain release labels, and cannot escape folders', () => {
  const result = markdownPath({ ...record, originalFilename: '..\\Change Management - Australia.docx' });
  assert.equal(result, 'markdown/change-management/change-management-australia.md');
  assert.equal(markdownPath({ ...record, originalFilename: 'CON.txt' }),
    'markdown/change-management/document-con.md');
  assert.equal(markdownPath({ ...record, originalFilename: undefined }), 'markdown/change-management/change-management-process-guide.md');
});
