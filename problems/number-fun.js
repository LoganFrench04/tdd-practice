function returnsThree() {
  // Your code here
  return 3
}

function reciprocal(n) {
  // Your code here
  if (typeof n !== 'number') {
    throw new TypeError('arguments can only be numbers')
  } else if (n < 1) {
    throw new RangeError('arguments can not be less than 1')
  } else if (n > 1000000) {
    throw new RangeError('arguments can not be greater than 1 million')
  }
  return 1 / n
}

console.log(reciprocal(1000))

module.exports = {
  returnsThree,
  reciprocal
};
