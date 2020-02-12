// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {
  for (let x = 0; x < Math.floor(str.length / 2); x++) {
    if (str[x] != str[str.length - 1 - x]) {
      return false
    }
  }
  return true;
}
