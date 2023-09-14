function returnsThree() {
  // Your code here
  return 3 
}

function reciprocal(n) {
  // Your code here
  if (typeof n !== 'number') {
    throw new TypeError('arguments can only be numbers')
  }
  return 1 / n
}

console.log(reciprocal(23))

module.exports = {
  returnsThree,
  reciprocal
};
