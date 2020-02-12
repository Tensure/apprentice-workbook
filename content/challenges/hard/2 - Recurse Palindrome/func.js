// Write a function that recursively determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {
  return isPalindrome(str);
}

function isPalindrome(str) {
  if (str.length <= 1) {
      return true;
  }
  console.log(str);
  if (str[0] === str[str.length -1]) {
      return isPalindrome(str.substring(1, str.length - 3));
  } else {
      return false;
  }
}