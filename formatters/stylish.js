const checkType = (inputValue, nestedDepth = 1) => {
  if (typeof inputValue === 'object' && inputValue !== null) {
    const keys = Object.keys(inputValue);
    const result = keys.map((key) => {
      const resultValue = inputValue[key];
      const valueString = checkType(resultValue, nestedDepth + 1);
      return `${' '.repeat(4 * (nestedDepth + 1))}${key}: ${valueString}`;
    });
    return ['{', ...result, `${' '.repeat(4 * (nestedDepth))}}`].join('\n');
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
          return `${spaces}- ${item.key}: ${checkType(item.oldValue, depth)}\n`
                 + `${spaces}+ ${item.key}: ${checkType(item.newValue, depth)}`;
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
