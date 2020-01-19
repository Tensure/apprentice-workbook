// Create a function that takes a word and returns true if the word has two consecutive identical letters.
module.exports = (word) => {
    let lastletter;
    for (let i = 0; i < word.length; i++){
        const letter = word[i];
        if (lastletter) {
            if (letter === lastletter) {
                return true;
            }
        }
        lastletter = letter;
    }
    return false;
}