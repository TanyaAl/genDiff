import { expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../src/index.js';

const filename = fileURLToPath(import.meta.url);
const directName = dirname(filename);

const getFixturePath = (file) => join(directName, '..', '__fixtures__', file);
const extensions = ['json', 'yaml', 'yml'];

const stylishOutput = readFileSync(join(directName, '..', '__fixtures__', 'testStylishDiff.txt'), 'utf-8');
const plainOutput = readFileSync(join(directName, '..', '__fixtures__', 'testPlainDiff.txt'), 'utf-8');
const jsonOutput = readFileSync(join(directName, '..', '__fixtures__', 'testJSONdiff.txt'), 'utf-8');

test.each(extensions)('compare(%o, %o)', (extension) => {
  const file1 = getFixturePath(`file1.${extension}`);
  const file2 = getFixturePath(`file2.${extension}`);
  expect(gendiff(file1, file2, 'stylish')).toEqual(stylishOutput);
  expect(gendiff(file1, file2, 'plain')).toEqual(plainOutput);
  expect(gendiff(file1, file2, 'json')).toEqual(jsonOutput);
  expect(gendiff(file1, file2)).toEqual(stylishOutput);
});
