import _ from 'lodash';

const compare = (data1, data2) => {
  const entries1 = Object.keys(data1);
  const entries2 = Object.keys(data2);
  const unionEntries = _.sortBy([...new Set([...entries1, ...entries2])]);
  const result = unionEntries.map((key) => {
    if (data1[key] === data2[key]) {
      return { key, value: data1[key], status: 'unchanged' };
    }
    if (!Object.hasOwn(data1, key)) {
      return { key, value: data2[key], status: 'added' };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, value: data1[key], status: 'deleted' };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      const nestedObj = compare(data1[key], data2[key]);
      return { key, nestedObj, status: 'nested' };
    }
    return {
      key, oldValue: data1[key], newValue: data2[key], status: 'changed',
    };
  });
  return result;
};

export default compare;
