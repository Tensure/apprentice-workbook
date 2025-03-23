// If the number is a multiple of 3, return "Hello"
// If the number is a multiple of 5, return "Tensure"
// If the number is a multiple of both 3 and 5, return "Hello Tensure"
// If the number is not a multiple of 3 or 5, "Goodbye Tensure"
// You will need the modulo operator (%) to solve this challenge

/**
 * This function returns a greeting based on the number provided
 * @param {number} num
 *
 * @returns {string}
 */
module.exports = (num) => {
    if (num % 3 === 0) {
        if (num % 5 === 0) {
            return "Hello Tensure"
        } else {
            return "Hello"
        }
    } else if (num % 5 === 0) {
        return "Tensure"
    } else {
        return "Goodbye Tensure"
    }
};
