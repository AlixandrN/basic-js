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
function repeater(str, options) {
  if(typeof str != 'string') {str = String(str);}
  if(typeof options.addition != 'string' && typeof options.addition !== 'undefined') {options.addition = String(options.addition);}
  if (options.separator === undefined) {options.separator = '+'}
  if (options.additionSeparator === undefined) {options.additionSeparator = '|'}
  let ObArr = Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator)
  let mainOb = str + ObArr
  let resArr = Array(options.repeatTimes).fill(mainOb).join(options.separator)
  return resArr

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};

// console.log(repeater('STRING', { repeatTimes: 3, addition: 'PLUS', additionRepeatTimes: 3}))
// console.log(repeater('STRING', { separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))
// console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }))
// console.log(repeater('la', { repeatTimes: 3, separator: 's'}))
// node extended-repeater.js