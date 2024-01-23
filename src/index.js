import { readFileSync } from 'node:fs';
import { cwd } from 'process';
import path from 'path';
import compare from './makeAST.js';
import getParsedData from './parsers.js';
import getFormatter from '../formatters/index.js';

const getPath = (file) => path.resolve(cwd(), file);
const getExtname = (file) => path.extname(file);

const gendiff = (filepath1, filepath2, format = 'stylish') => {

    const file1 = readFileSync(getPath(filepath1), 'utf-8');
    const file2 = readFileSync(getPath(filepath2), 'utf-8');

    const extname1 = getExtname(filepath1);
    const extname2 = getExtname(filepath2);

    const data1 = getParsedData(file1, extname1);
    const data2 = getParsedData(file2, extname2);
 
    const compareData = compare(data1, data2);
    const result = getFormatter(compareData, format);

    return result;
};

export default gendiff;

