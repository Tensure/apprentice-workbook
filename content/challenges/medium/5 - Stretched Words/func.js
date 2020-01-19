// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.
// Notes:
//   - Final strings won't include words with double letters (e.g. "passing", "lottery").

module.exports = (word) => {
  let output = '';
  let lastLetter = '';

  for (let i = 0; i < word.length; i++) {
    const curLetter = word[i];
     if (curLetter != lastLetter) {
       output += curLetter;
     }
     lastLetter = curLetter;
  }
  return output;
}