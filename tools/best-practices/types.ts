import type { Download, Locator, Page } from 'playwright';

export type ResourceStatus = 'pending' | 'downloaded' | 'complete' | 'download_failed' | 'extraction_failed';

export interface ResourceRecord {
  url: string;
  status?: ResourceStatus;
  title?: string;
  original?: string;
  originalFilename?: string;
  sha256?: string;
  text?: string | null;
  textSha256?: string | null;
  release?: string | null;
  lastUpdated?: string | null;
  error?: string | null;
  collections?: string[];
  categories?: string[];
  attemptedAt?: string;
  downloadedAt?: string;
  checkedAt?: string;
}

export interface CollectionRecord {
  discoveredAt: string;
  categoryCounts: Record<string, number>;
  resourceUrls: string[];
}

export interface CorpusIndex {
  schemaVersion: 1;
  collections: Record<string, CollectionRecord>;
  resources: Record<string, ResourceRecord>;
  lastRun?: {
    startedAt: string;
    discovered: number;
    selected: number;
    finishedAt: string | null;
    failures?: number;
  };
}

export interface CollectionOptions {
  resume?: boolean;
  delay?: number;
  limit?: number;
  downloadResource?: (page: Page, button: Locator) => Promise<Pick<Download, 'failure' | 'suggestedFilename' | 'saveAs'>>;
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function hasErrorCode(error: unknown, code: string): boolean {
  return isObject(error) && error.code === code;
}

function isResource(value: unknown): value is ResourceRecord {
  if (!isObject(value) || typeof value.url !== 'string') return false;
  for (const key of ['title', 'original', 'originalFilename', 'sha256', 'attemptedAt', 'downloadedAt', 'checkedAt']) {
    if (value[key] !== undefined && typeof value[key] !== 'string') return false;
  }
  for (const key of ['text', 'textSha256', 'release', 'lastUpdated', 'error']) {
    if (value[key] !== undefined && value[key] !== null && typeof value[key] !== 'string') return false;
  }
  for (const key of ['collections', 'categories']) {
    if (value[key] !== undefined && (!Array.isArray(value[key]) || !value[key].every(item => typeof item === 'string'))) return false;
  }
  return value.status === undefined || ['pending', 'downloaded', 'complete', 'download_failed', 'extraction_failed'].some(status => status === value.status);
}

export function isCorpusIndex(value: unknown): value is CorpusIndex {
  if (!isObject(value) || value.schemaVersion !== 1 || !isObject(value.collections) || !isObject(value.resources)) return false;
  if (!Object.values(value.resources).every(isResource)) return false;
  for (const collection of Object.values(value.collections)) {
    if (!isObject(collection) || typeof collection.discoveredAt !== 'string' ||
        !isObject(collection.categoryCounts) || !Object.values(collection.categoryCounts).every(count => typeof count === 'number') ||
        !Array.isArray(collection.resourceUrls) || !collection.resourceUrls.every(url => typeof url === 'string')) return false;
  }
  if (value.lastRun !== undefined) {
    const run = value.lastRun;
    if (!isObject(run) || typeof run.startedAt !== 'string' || typeof run.discovered !== 'number' ||
        typeof run.selected !== 'number' || (run.finishedAt !== null && typeof run.finishedAt !== 'string') ||
        (run.failures !== undefined && typeof run.failures !== 'number')) return false;
  }
  return true;
}
