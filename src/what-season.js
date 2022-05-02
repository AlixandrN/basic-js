const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) {return 'Unable to determine the time of year!'}
  // if(Object.prototype.toString.call(date) != '[object Date]') {throw new Error('Invalid date!')}
  try {date.getTime()} catch(e) {throw new Error('Invalid date!')}
  let n = date.getMonth()
  if (n === 0 || n === 1 || n === 11) {return 'winter'}
  if (n === 2 || n === 3 || n === 4) {return 'spring'}
  if (n === 5 || n === 6 || n === 7) {return 'summer'}
  else return 'autumn'
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};

// let t = new Date(2020, 02, 31)
// console.log(getSeason(t))