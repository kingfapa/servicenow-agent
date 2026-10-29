import assert from 'node:assert/strict';
import { test } from 'node:test';
import { toMarkdown } from '../markdown.ts';

test('Markdown contains section headings, notes, escaped content and tables', () => {
  const result = toMarkdown('--- Slide 1 ---\n<unsafe>\n[Speaker notes]\nRead *this*\nRole\tOwner\nA|B\tTeam');
  assert.match(result, /^## Slide 1/);
  assert.match(result, /### Speaker notes/);
  assert.match(result, /&lt;unsafe&gt;/);
  assert.ok(result.includes('Read \\*this\\*'));
  assert.ok(result.includes('| Column 1 | Column 2 |\n| --- | --- |'));
  assert.ok(result.includes('| A\\|B | Team |'));
});
