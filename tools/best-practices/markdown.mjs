export function escapeMarkdown(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/([\\`*_{}[\]#|!])/g, '\\$1');
}

export function toMarkdown(text) {
  const lines = text.split(/\r?\n/);
  const output = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trimEnd();
    if (!line.trim()) continue;
    const marker = /^--- (.+) ---$/.exec(line);
    if (marker) {
      output.push(`## ${escapeMarkdown(marker[1])}`, '');
    } else if (line === '[Speaker notes]') {
      output.push('### Speaker notes', '');
    } else if (line.includes('\t')) {
      const rows = [];
      while (i < lines.length && lines[i].includes('\t')) rows.push(lines[i++].split('\t'));
      i--;
      const width = Math.max(...rows.map(row => row.length));
      const format = row => '| ' + Array.from({ length: width }, (_, j) =>
        escapeMarkdown(row[j] ?? '')).join(' | ') + ' |';
      // Generic column labels avoid misrepresenting the first source row as a header.
      output.push(format(Array.from({ length: width }, (_, j) => `Column ${j + 1}`)),
        '| ' + Array(width).fill('---').join(' | ') + ' |', ...rows.map(format), '');
    } else {
      output.push(escapeMarkdown(line), '');
    }
  }
  return output.join('\n').trim();
}
