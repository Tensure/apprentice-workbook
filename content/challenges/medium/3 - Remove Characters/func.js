// Challenge link here: https://edabit.com/challenge/k7CwrsKPHrEL8h4z6
module.exports = (str) => {
    const badChars = ['!', '@', '#', '$', '%', '^', '&', '\\', '*', '(', ')', '.']
    let output = '';
    for (let curLetterIndex = 0; curLetterIndex < str.length; curLetterIndex++) {
        let curLetter = str[curLetterIndex];
        let isBadChar = false;
        for(let curBadCharIndex = 0; curBadCharIndex < badChars.length; curBadCharIndex++) {
            let curBadChar = badChars[curBadCharIndex];

            if (curLetter == curBadChar){
                isBadChar = true;
            }
        }
        if (!isBadChar) {
            output += curLetter;
        }
    }
    return output;
}
