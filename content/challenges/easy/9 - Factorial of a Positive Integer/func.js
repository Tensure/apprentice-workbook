// Write a function that takes a positive integer and return its factorial.
// The factorial of 0 is 1.
// The factorial of any positive integer Z is Z * (Z - 1) * (Z - 2) * . . . . . . * 1 (e.g. factorial of 3 is 3 * 2 * 1 = 6).
module.exports = (num) => {
  let factorial = 1;
  if (num === 0) {
    return 1;
  } else {
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
  }
  return factorial
};
