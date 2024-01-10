import yaml from 'js-yaml';
import _ from 'lodash';

const getParsedData = (data, extname) => {
  const extensionWithoutDot = extname.slice(1);
    switch(extensionWithoutDot) {
      case 'json':
        return JSON.parse(data);
      case 'yaml':
        return yaml.load(data);
        case 'yml':
        return yaml.load(data);
    default:
      throw new Error(`Unsupported file extension: ${extname}`);
    }
};

// const stringify = (data, replacer = ' ', count = 1) => {
//   const iter = (currentValue, depth) => {
//     if (typeof currentValue !== 'object') {
//       return `${currentValue}`;
//     }
//     const forSpaces = count * depth;
//     const spaces = replacer.repeat(forSpaces);
//     const spacesBr = replacer.repeat(forSpaces - count);

//     const toString = Object.entries(currentValue).map(([key, value]) => `${spaces}${key}: ${iter(value, depth + 1)},`);
//     return ['{', ...toString, `${spacesBr}}`].join('\n');
//   };
//   return iter(data, 1);
// };

const compare = (data1, data2) => {
  const entries1 = Object.keys(data1);
  const entries2 = Object.keys(data2);
  const unionEntries = _.sortBy(entries1.concat(entries2));
  let result = '';
  for (const key of unionEntries) {
    if (!data1.hasOwnProperty(key)) {
      result += ` + ${key}: ${data2[key]}\n`;
    } else if (!(data2.hasOwnProperty(key))) {
      result += ` - ${key}: ${data1[key]}\n`;
    } else if (data1[key] !== data2[key]) {
      if (!result.includes(data1[key]) && !result.includes(data2[key])) {
      result += ` - ${key}: ${data1[key]}\n`;
      result += ` + ${key}: ${data2[key]}\n`;   
      }
    } else {
      if (!result.includes(key)) {
      result +=  `   ${key}: ${data1[key]}\n`;  
      }
    }
  }
  return `{\n${result}}`;
};

export { getParsedData, compare };