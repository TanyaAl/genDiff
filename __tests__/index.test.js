import { readFileSync } from 'node:fs';
import gendiff from '../src/index.js';

const file1 = './__fixtures__/file1.json';
const file2 = './__fixtures__/file2.json';

test('compare two JSON with differences', () => {
  const rightOutput = readFileSync('./__fixtures__/testJSONdif.txt', 'utf-8');
  expect(gendiff(file1, file2)).toEqual(rightOutput);
  const outputForSame = readFileSync('./__fixtures__/testJSONsame.txt', 'utf-8');
  expect(gendiff(file1, file1)).toEqual(outputForSame);
});

