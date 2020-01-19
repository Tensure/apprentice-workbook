// Create a function that performs an even-odd transform to an array, n times. 
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.
module.exports = (arr, n) => {
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < arr.length; y++) {
      let num = arr[y];
      if (num % 2 ==0) {
        num -= 2;
      } else {
        num += 2;
      }
      arr[y] = num;
    }
  }
  return arr;
}