import path from 'node:path';
import type { ResourceRecord } from './types.ts';

function slug(value: string): string {
  return String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function markdownPath(record: Pick<ResourceRecord, 'url' | 'title' | 'originalFilename' | 'categories'>): string {
  const sourceSlug = new URL(record.url).pathname.split('/').filter(Boolean).at(-1);
  if (!sourceSlug) throw new Error('Resource URL has no filename');
  const originalName = record.originalFilename?.split(/[/\\]/).at(-1);
  const stem = originalName ? originalName.slice(0, originalName.length - path.extname(originalName).length) : sourceSlug;
  const filename = slug(stem);
  if (!filename) throw new Error('Original filename cannot form a Markdown filename');

  // Prefer the full topic in the catalog title over abbreviations in filenames.
  const titleTopic = record.title?.split(/\s+[-–—]\s+/);
  let topic;
  if (titleTopic && titleTopic.length > 1) {
    topic = slug(titleTopic[0]);
  } else {
    const suffixes = [
      ...(record.categories ?? []).map(slug),
      'process-workshop-presentation', 'process-workshop', 'process-guide',
      'starter-stories-and-story-tests', 'starter-stories',
      'recommended-implementation-sequence', 'implementation-guide', 'deployment-guide',
    ].sort((a, b) => b.length - a.length);
    const suffix = suffixes.find(value => sourceSlug.endsWith(`-${value}`));
    topic = slug(suffix ? sourceSlug.slice(0, -suffix.length - 1) : sourceSlug);
  }
  if (!topic) throw new Error('Resource metadata cannot form a topic folder');
  // Prefix reserved Windows device names for portable corpus paths.
  const portable = (value: string) => /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i.test(value) ? `document-${value}` : value;
  return `markdown/${portable(topic)}/${portable(filename)}.md`;
}
