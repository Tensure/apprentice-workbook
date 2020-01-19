// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
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
