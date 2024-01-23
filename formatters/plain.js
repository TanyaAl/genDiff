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
            let result = '';
            switch (item.status) {
            case 'nested':
                result += `${plain(item.nestedObj, depth + 1, currentPath)}`;
                break;
            case 'added':
                result += `Property '${currentPath}' was added with value: ${checkType(item.value, depth)}`;
                break;
            case 'changed':
                result += `Property '${currentPath}' was updated. From ${checkType(item.oldValue, depth)} to ${checkType(item.newValue, depth)}`;
                break;
            case 'deleted':
                result += `Property '${currentPath}' was removed`;
                break;
            case 'unchanged':
                result += [];
                break;
            default:
                break;
            }
        return result; 
        });
        return toString.filter((line) => line !== '').join('\n');
        };

export default plain;
