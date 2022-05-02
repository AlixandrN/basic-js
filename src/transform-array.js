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
function transform(arr) {
  if (!Array.isArray(arr)) {throw new Error("'arr' parameter must be an instance of the Array!")}
  let resArr = []
  for(let i=0; i<arr.length; i++) {
    if ((arr[i] === '--double-next' || arr[i] === '--discard-next') && !arr[i+1]) {break}

    if (arr[i] === '--double-next') {resArr.push(arr[i+1]); i++}
    if (arr[i+1] === '--double-prev') {resArr.push(arr[i]); resArr.push(arr[i]); i++; i++} //{resArr.push(arr[i-1]); i++}
    if (arr[i] === '--discard-next') {i++; i++}
    if (arr[i+1] === '--discard-prev') {i++; i++}

    if(arr[i] === '--discard-prev') {i++}
    if(arr[i] === '--double-prev') {i++}

    resArr.push(arr[i])
  }
    return resArr
  // remove line with error and write your code here
}

module.exports = {
  transform
};

// console.log(transform('dfmd'))
// console.log(transform([1, 2, 3, '--double-next', 4, 5]))
// console.log(transform([1, 2, 3, '--double-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--discard-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--discard-next', 4, 5]))
// npm run test
// node transform-array.js
// ['--discard-prev', 1, 2, 3], ['--double-prev', 1, 2, 3], [1, 2, 3, '--double-next'], [1, 2, 3, '--discard-next']
// console.log(transform(['--discard-prev', 1, 2, 3]))
// console.log(transform([1, 2, 3, '--discard-next']))