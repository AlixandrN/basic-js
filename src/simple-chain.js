const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
    // remove line with error and write your code here
  },
  addLink(value) {
    if (value === undefined) {this.arr.push(`( )`);}
      else {this.arr.push(`( ${value} )`);}
      return this
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(this.arr[position] && position !== 0 &&
      // Number.isInteger(position) &&
      typeof position === 'number') {
        this.arr = [...this.arr.slice(0,position -1), ...this.arr.slice(position)]
        return this
      }
    else {this.arr=[]; throw new Error("You can't remove incorrect link!")}
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse(); return this
    // remove line with error and write your code here
  },
  finishChain() {
    let printArray = this.arr
    this.arr = []
    return printArray.join('~~')
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};

// console.log(chainMaker.addLink(null).addLink(false).addLink(0).reverseChain().reverseChain().finishChain())
// node simple-chain.js