const checkType = (inputValue) => {
    // console.log(inputValue);
    if (typeof inputValue === 'object' && inputValue !== null) {
      return '[complex value]';
    }
    else if ( typeof inputValue === 'string') {
      return `'${inputValue}'`;
    }
    return `${inputValue}`;
  }; 
  
    const plain = (data, depth, path = '') => {
        const toString = Object.values(data).map((item) => {
            const currentPath = path ? `${path}.${item.key}` : item.key;
            switch (item.status) {
            case 'nested':
                return `${plain(item.nestedObj, depth + 1, currentPath)}`;
            case 'added':
                return `Property '${currentPath}' was added with value: ${checkType(item.value, depth)}`;
            case 'changed':
                return `Property '${currentPath}' was updated. From ${checkType(item.oldValue, depth)} to ${checkType(item.newValue, depth)}`;
            case 'deleted':
                return `Property '${currentPath}' was removed`;
            case 'unchanged':
                return null;
            default:
                break;
            }
        });
        return toString.filter((line) => line !== null).join('\n');
        };

export default plain;
