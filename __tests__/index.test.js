import { readFileSync } from 'node:fs';
import gendiff from '../src/index.js';

test('compare two JSON with differences', () => {
  const file1 = './__fixtures__/file1.json';
  const file2 = './__fixtures__/file2.json';
  const rightOutput = readFileSync('./__fixtures__/testJSONdif.txt', 'utf-8');
  expect(gendiff(file1, file2)).toEqual(rightOutput);
});

test('compare two JSON without differences', () => {
  const file1 = './__fixtures__/file1.json';
  const file2 = './__fixtures__/file1.json';
  const rightOutput = readFileSync('./__fixtures__/testJSONsame.txt', 'utf-8');
  expect(gendiff(file1, file2)).toEqual(rightOutput);
});