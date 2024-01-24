import plain from './plain.js';
import stringify from './stylish.js';

const getFormatter = (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stringify(tree);
    case 'plain':
      return plain(tree);
    case 'json':
        return JSON.stringify(tree);
    default:
      throw new Error(`Unsupported format: ${formatName}`);  
    }
};

export default getFormatter;
