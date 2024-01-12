import { readFileSync } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


test('compare two JSON', () => {
  const file1 = path.join(__dirname, '..', '__fixtures__', 'file1.json');
  const file2 = path.join(__dirname, '..', '__fixtures__', 'file2.json');
  const rightOutput = readFileSync(path.join(__dirname, '..','__fixtures__','testJSONdif.txt'), 'utf-8');
  expect(gendiff(file1, file2)).toEqual(rightOutput);
  const outputForSame = readFileSync(path.join(__dirname, '..', '__fixtures__','testJSONsame.txt'), 'utf-8');
  expect(gendiff(file1, file1)).toEqual(outputForSame);
});

test('compare two YML', () => {
  const file1 = path.join(__dirname, '..', '__fixtures__', 'file1.yml');
  const file2 = path.join(__dirname, '..', '__fixtures__', 'file2.yml');
  const rightOutput = readFileSync(path.join(__dirname, '..','__fixtures__','testYMLdif.txt'), 'utf-8');
  expect(gendiff(file1, file2)).toEqual(rightOutput);
  const outputForSame = readFileSync(path.join(__dirname, '..', '__fixtures__','testYMLsame.txt'), 'utf-8');
  expect(gendiff(file1, file1)).toEqual(outputForSame);
});