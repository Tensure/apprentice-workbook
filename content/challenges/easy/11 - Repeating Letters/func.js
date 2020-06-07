/* Create a function that takes a string and returns a string in which each character is repeated once. */

module.exports = (str) => {
    let strArr = str.split("");
    let repeatedLetterArr = [];

    for (let i = 0; i < strArr.length; i++) {
        repeatedLetterArr.push(strArr[i], strArr[i])
    }

    return repeatedLetterArr.join("")
};
