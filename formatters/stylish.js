// import _ from 'lodash';

const checkType = (inputValue, nestedDepth = 1) => {
  if (typeof inputValue === 'object' && inputValue !== null) {
  const keys = Object.keys(inputValue);
  const result = keys.map(key => {
    const resultValue = inputValue[key];
    const valueString = checkType(resultValue, nestedDepth + 1);
    return `${' '.repeat(4 * (nestedDepth + 1))}${key}: ${valueString}`;
  });
    return [`{`, ...result, `${' '.repeat(4 * (nestedDepth))}}`].join('\n');
} 
  return `${inputValue}`;
};

const stringify = (data, replacer = ' ', count = 4) => {
  const iter = (currentValue, depth) => {
    const spaces = replacer.repeat(count * depth - 2);
    const spacesBr = replacer.repeat(count * (depth - 1));
    const toString = Object.values(currentValue).map((item) => {
      switch (item.status) {
        case 'nested':
          return `${spaces}  ${item.key}: ${iter(item.nestedObj, depth + 1)}`;
        case 'added':
          return `${spaces}+ ${item.key}: ${checkType(item.value, depth)}`;
        case 'changed':
          return `${spaces}- ${item.key}: ${checkType(item.oldValue, depth)}\n`+
                 `${spaces}+ ${item.key}: ${checkType(item.newValue, depth)}`;
        case 'deleted':
          return `${spaces}- ${item.key}: ${checkType(item.value, depth)}`;
        default:
          return `${spaces}  ${item.key}: ${checkType(item.value, depth)}`;
      }
    });
    return ['{', ...toString, `${spacesBr}}`].join('\n');
  };
  return iter(data, 1);
 };

export default stringify;


// const data = [
//   {
//     key: 'common',
//     nestedObj: [
//       { key: 'follow', value: false, status: 'added' },
//       { key: 'setting1', value: 'Value 1', status: 'unchanged' },
//       { key: 'setting2', value: 200, status: 'deleted' },
//       {
//         key: 'setting3',
//         oldValue: true,
//         newValue: null,
//         status: 'changed'
//       },
//       { key: 'setting4', value: 'blah blah', status: 'added' },
//       { key: 'setting5', value: { key5: 'value5' }, status: 'added' },
//       {
//         key: 'setting6',
//         nestedObj: [
//           {
//             key: 'doge',
//             nestedObj: [
//               {
//                 key: 'wow',
//                 oldValue: '',
//                 newValue: 'so much',
//                 status: 'changed'
//               }
//             ],
//             status: 'nested'
//           },
//           { key: 'key', value: 'value', status: 'unchanged' },
//           { key: 'ops', value: 'vops', status: 'added' }
//         ],
//         status: 'nested'
//       }
//     ],
//     status: 'nested'
//   },
//   {
//     key: 'group1',
//     nestedObj: [
//       {
//         key: 'baz',
//         oldValue: 'bas',
//         newValue: 'bars',
//         status: 'changed'
//       },
//       { key: 'foo', value: 'bar', status: 'unchanged' },
//       {
//         key: 'nest',
//         oldValue: { key: 'value' },
//         newValue: 'str',
//         status: 'changed'
//       }
//     ],
//     status: 'nested'
//   },
//   {
//     key: 'group2',
//     value: { abc: 12345, deep: { id: 45 } },
//     status: 'deleted'
//   },
//   {
//     key: 'group3',
//     value: { deep: { id: { number: 45 } }, fee: 100500 },
//     status: 'added'
//   }
// ];
// const replacer = '*';
// const count = 4;
// stringify(data, replacer, count);

