// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {
  const words = str.split(' ');
  const output = [];

  for (let x = 0; x < words.length; x++) {
    const curWord = words[x];
    if (curWord.length > 4) {
      let reversed = '';
      for (let y = curWord.length - 1; y >= 0; y--) {
        reversed += curWord[y];
      }
      output.push(reversed);
    } else {
      output.push(curWord);
    }
  }

  return output.join(' ');
}