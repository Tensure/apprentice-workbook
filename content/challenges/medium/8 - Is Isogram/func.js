// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes: 
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.
module.exports = (str) => {
  const letters = [];
  for (let x = 0; x < str.length; x++) {
    const curLetter = str[x];
    for (let y = 0; y < letters.length; y++) {
      if (curLetter.toLowerCase() == letters[y].toLowerCase()){
        return false
      }
    }
    letters.push(curLetter.toLowerCase());
  }
  return true;
}
