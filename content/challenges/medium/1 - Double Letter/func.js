// Challenge link here: https://edabit.com/challenge/YHLaB8itA9tEDN5TG
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