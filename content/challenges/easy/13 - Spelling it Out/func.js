/* Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed. */

module.exports = (str) => {
    let strArray = str.split('');
    let partialWord = '';
    let finalArray = [];
    for (let i = 0; i < strArray.length; i++) {
        partialWord += strArray[i];
        finalArray.push(partialWord);
    }
    return finalArray;
};
