const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes = 1, separator = '+' , addition, additionRepeatTimes = 1, additionSeparator = '+'}) {
  const fillRepeatArray = (value, length) => {
      const arr = [];
      for (let index = 0; index < length; index++) {
          arr.push(String(value));
      }
      return arr;
  }

  if (addition !== undefined) {
      const additionStr = fillRepeatArray(addition, additionRepeatTimes).join(additionSeparator);
      str += additionStr;
  } 
  return fillRepeatArray(str, repeatTimes).join(separator);

}

module.exports = {
  repeater
};
