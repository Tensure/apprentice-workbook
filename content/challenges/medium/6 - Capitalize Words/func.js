// Create a function that takes a string as an argument and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.
module.exports = (str) => {
  const words = str.split(" ");
  const output = []
  for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
    const word = words[wordIndex];
    output.push(
      word[0].toUpperCase() +
      word.substr(1)
    )
  }
  return output.join(' ');
}