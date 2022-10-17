const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
return array.length  },
  addLink( value ) {
    array.push(`${value}`);
  return this
  },
  removeLink(position ) {
    if (position - Math.trunc(position) !== 0 || typeof position !== 'number' || 0 < position > array.length){
      array = [];
      throw new Error();
    }
      array.splice(position - 1, 1);
      return this

  },
  reverseChain() {
    array.reverse();
    return this
  },
  finishChain() {
    const result = `( ${array.join(' )~~( ')} )`;
    array = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
