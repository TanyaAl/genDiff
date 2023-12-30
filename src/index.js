import { readFileSync } from 'node:fs';
import { cwd } from 'process';
import path from 'path';
import getParsedData from './utils.js';

const getPath = (file) => path.resolve(cwd(), file);
const getExtname = (file) => path.extname(file);

const gendiff = (filepath1, filepath2, format = 'utf-8') => {

    const file1 = readFileSync(getPath(filepath1), 'utf-8');
    const file2 = readFileSync(getPath(filepath2), 'utf-8');

    const extname1 = getExtname(filepath1);
    const extname2 = getExtname(filepath2);

    const data1 = getParsedData(file1, extname1);
    const data2 = getParsedData(file2, extname2);

    return [file1, file2];
}

export default gendiff;

// 1) настроить с помощью commander js - запускаем bin файл DONE
// 2) мы должны считать содержимое двух файлов, которые нам указал пользователь
//     а)path.resolve(собирает из относительного пути полный путь до корневого диска), process.cwd() - 
//     текущая папка изнутри которой будет запускаться приложение) + /file.json DONE
//     б) модуль fs для считывания файлов fsPromises.readFile(path[, options]) DONE
//     в) вырезать расширение и благодаря этому понять какой парсер нужно вызывать 
//     JSON.parse() или yml.load() при помощи path.extname DONE
//     г) распарсить полученные данные при помощи нужного расширения выясненного на этапе в)
//     Вынести пункт г) в отдельную функцию и в отдельный модуль куда отпрвляются сырые данные и расширениеЖ
//     const getParsedData = (data, ext) => {
//         switch (ext) {
//             //cases со всеми возм. расширениями => return parse(data);
//         }
//     } DONE
//     3) результат: const obj1 = { ...}, const obj2 = { ...} данные переведены из 
//     json в понятный для js формат объекта и он может с ними работать
