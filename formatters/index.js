import plain from './plain.js';
import stringify from './stylish.js';

const getFormatter = (tree, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stringify(tree);
    case 'plain':
      return plain(tree);
    default:
      throw new Error(`Unsupported format: ${formatName}`);  
    }
};

export default getFormatter;
