import yaml from 'js-yaml';

const getParsedData = (data, extname) => {
    switch(extname) {
      case '.json':
        return JSON.parse(data);
      case '.yaml':
        return yaml.load(data);
        case '.yml':
        return yaml.load(data);
    default:
      throw new Error(`Unsupported file extension: ${extname}`);
    }
};
export default getParsedData;