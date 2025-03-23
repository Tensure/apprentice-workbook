// return the stage of life a person is in
// depending on their age
//
// Less than 2 is 'Baby'
// Greater than 2 and less than 13 is 'Kid'
// Greater than 13 and less than 19 is 'Teen'
// Greater than 19 and less than 30 is 'Young Adult'
// Greater than 30 is 'Dead'

/**
 * Returns a string representing the stage of life a person is in
 * @param {*} age
 *
 * @returns {string}
 */
module.exports = (age) => {
    if (age < 2) {
        return 'Baby'
    } else if (age < 13) {
        return 'Kid'
    } else if (age < 19) {
        return 'Teen'
    } else if (age < 30){
        return 'Young Adult'
    } else {
        return 'Dead'
    }
}