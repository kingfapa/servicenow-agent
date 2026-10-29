import { XMLParser, XMLValidator } from 'fast-xml-parser';
import { isObject } from './types.ts';

export type XmlValue = string | XmlObject | XmlValue[];
export interface XmlObject { [key: string]: XmlValue | undefined }
export interface XmlNode {
  tag: string;
  attributes: Record<string, string>;
  children: XmlNode[];
  text?: string;
}

function isXmlValue(value: unknown): value is XmlValue {
  if (typeof value === 'string') return true;
  if (Array.isArray(value)) return value.every(isXmlValue);
  return isObject(value) && Object.values(value).every(isXmlValue);
}

export function object(value: XmlValue | undefined): XmlObject {
  if (value === undefined || value === '') return {};
  if (typeof value !== 'object' || Array.isArray(value)) throw new Error('Expected XML element');
  return value;
}

export function elements(value: XmlValue | undefined): XmlObject[] {
  return (value === undefined ? [] : Array.isArray(value) ? value : [value]).map(object);
}

export function scalar(value: XmlValue | undefined): string | undefined {
  if (value === undefined || typeof value === 'string') return value;
  throw new Error('Expected XML string value');
}

export function requiredScalar(value: XmlValue | undefined): string {
  const result = scalar(value);
  if (result === undefined) throw new Error('Missing XML string value');
  return result;
}

function orderedNodes(value: XmlValue): XmlNode[] {
  if (!Array.isArray(value)) throw new Error('Expected ordered XML nodes');
  return value.flatMap(item => {
    const node = object(item);
    const attributes: Record<string, string> = {};
    for (const [key, val] of Object.entries(object(node[':@']))) attributes[key] = requiredScalar(val);
    return Object.entries(node).filter(([tag]) => tag !== ':@').map(([tag, children]) => {
      if (tag === '#text') return { tag, attributes, children: [], text: requiredScalar(children) };
      if (children === undefined) throw new Error('Missing XML children');
      return { tag, attributes, children: orderedNodes(children) };
    });
  });
}

export function xml(source: string, ordered: true): XmlNode[];
export function xml(source: string, ordered?: false): XmlObject;
export function xml(source: string, ordered = false): XmlObject | XmlNode[] {
  if (/<!DOCTYPE|<!ENTITY/i.test(source)) throw new Error('XML declarations with DTDs/entities are not supported');
  const valid = XMLValidator.validate(source);
  if (valid !== true) throw new Error(`Invalid XML: ${valid.err.msg}`);
  const parsed: unknown = new XMLParser({
    ignoreAttributes: false, transformTagName: (name: string) => name.split(':').at(-1) ?? name,
    parseTagValue: false, parseAttributeValue: false, preserveOrder: ordered, trimValues: false,
  }).parse(source);
  if (!isXmlValue(parsed)) throw new Error('Unsupported XML value');
  return ordered ? orderedNodes(parsed) : object(parsed);
}
