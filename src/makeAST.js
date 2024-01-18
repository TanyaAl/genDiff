import _ from 'lodash';

const compare = (data1, data2) => {
  // console.dir(data1, {depth: null});
  // console.dir(data2, {depth: null});
  const entries1 = Object.keys(data1);
  const entries2 = Object.keys(data2);
  const unionEntries = _.sortBy([...new Set([...entries1, ...entries2])]);
  const result = unionEntries.map((key) => {
    let data1Ex = Object.hasOwn(data1, key);
    let data2Ex = Object.hasOwn(data2, key);
      if (data1[key] === data2[key]) {
        return {
        key: key,
        value: data1[key],
        status: 'unchanged'  
        };
      } 
      if (!data1Ex) {
        return {
          key: key,
          value: data2[key],
          status: 'added'  
        }; 
      } 
      if (!data2Ex) {
        return {
        key: key,
        value: data1[key],
        status: 'deleted'  
        };
             
      }
      if (_.isObject(data1[key]) && _.isObject(data2[key])) {
        const nestedObj = compare(data1[key], data2[key]);
        return {
        key: key,
        nestedObj,
        status: 'nested'        
        };
      }
      return {
        key: key,
        oldValue: data1[key],
        newValue: data2[key],
        status: 'changed'  
        };
  });
  // console.log(result);
  return result;
};
export default compare;
