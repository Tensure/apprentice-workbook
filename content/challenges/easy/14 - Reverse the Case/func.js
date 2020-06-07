/* Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa. */

module.exports = (str) => {
    let strArray = str.split('');
    for (let i = 0; i < strArray.length; i++) {
        let currChar = strArray[i];
        if (currChar === currChar.toUpperCase()) {
            strArray.push(currChar.toLowerCase())
        } else {
            strArray.push(currChar.toUpperCase())
        }
    }
    return strArray.join('')
};
