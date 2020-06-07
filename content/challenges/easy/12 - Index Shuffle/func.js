/* Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together. */

module.exports = (str) => {
  let strArray = str.split("");
  let oddIndex = [];
  let evenIndex = [];
  for (let i = 0; i < strArray.length; i++) {
    if (i % 2 === 0) {
      oddIndex.push(strArray[i]);
    } else {
      evenIndex.push(strArray[i]);
    }
  }

  return oddIndex.join("").concat(evenIndex.join(""));
};
