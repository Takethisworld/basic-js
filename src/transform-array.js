const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  let arra = [];
  let res = [];
  arra = arr.concat(arra);
  if (arr.length === 0 || arr[0] === undefined) return [];
  let done = false;
  let index = 0;
  while (!done) {
    switch (arra[index]) {
      case '--discard-next':
        if (index === arra.length-1) {done = true; break; }
        if (equal(arra[index+1])) {break;}
        arra.splice(index+1,1); break;
      case '--discard-prev':
        if (index === 0) {break; }
        if (equal(arra[index - 1])) {break;}
        res.pop(); break;
      case '--double-next':
        if (index === arra.length - 1) {done = true; break; }
        if (equal(arra[index+1])) {break;}
        res.push(arra[index+1]); break;
      case '--double-prev':
        if (index === 0) {break; }
        if (equal(arra[index-1])) {break;}
        res.push(arra[index - 1]); break;
      default: res.push(arra[index]); break;
    }
    if (++index >= arra.length) break;
  }
  return res;
}

module.exports = {
  transform
};
