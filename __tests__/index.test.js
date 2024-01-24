import { test, expect } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../src/index';

const filename = fileURLToPath(import.meta.url);
const directName = dirname(filename);

test('compare two JSON/stylish', () => {
  const file1 = join(directName, '..', '__fixtures__', 'file1.json');
  const file2 = join(directName, '..', '__fixtures__', 'file2.json');
  const rightOutput = readFileSync(join(directName, '..', '__fixtures__', 'testStylishDiff.txt'), 'utf-8');
  expect(gendiff(file1, file2, 'stylish')).toEqual(rightOutput);
});
test('compare two YML/stylish', () => {
  const file1 = join(directName, '..', '__fixtures__', 'file1.yml');
  const file2 = join(directName, '..', '__fixtures__', 'file2.yml');
  const rightOutput = readFileSync(join(directName, '..', '__fixtures__', 'testStylishDiff.txt'), 'utf-8');
  expect(gendiff(file1, file2, 'stylish')).toEqual(rightOutput);
});
test('compare two JSON/plain', () => {
  const file1 = join(directName, '..', '__fixtures__', 'file1.json');
  const file2 = join(directName, '..', '__fixtures__', 'file2.json');
  const rightOutput = readFileSync(join(directName, '..', '__fixtures__', 'testPlainDiff.txt'), 'utf-8');
  expect(gendiff(file1, file2, 'plain')).toEqual(rightOutput);
});
test('compare two YML/plain', () => {
  const file1 = join(directName, '..', '__fixtures__', 'file1.yml');
  const file2 = join(directName, '..', '__fixtures__', 'file2.yml');
  const rightOutput = readFileSync(join(directName, '..', '__fixtures__', 'testPlainDiff.txt'), 'utf-8');
  expect(gendiff(file1, file2, 'plain')).toEqual(rightOutput);
});
test('compare two JSON/json', () => {
  const file1 = join(directName, '..', '__fixtures__', 'file1.json');
  const file2 = join(directName, '..', '__fixtures__', 'file2.json');
  const rightOutput = readFileSync(join(directName, '..', '__fixtures__', 'testJSONdiff.txt'), 'utf-8');
  expect(gendiff(file1, file2, 'json')).toEqual(rightOutput);
});
test('compare two YML/json', () => {
  const file1 = join(directName, '..', '__fixtures__', 'file1.yml');
  const file2 = join(directName, '..', '__fixtures__', 'file2.yml');
  const rightOutput = readFileSync(join(directName, '..', '__fixtures__', 'testJSONdiff.txt'), 'utf-8');
  expect(gendiff(file1, file2, 'json')).toEqual(rightOutput);
});
