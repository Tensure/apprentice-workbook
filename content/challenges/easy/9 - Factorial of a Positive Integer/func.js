/* Write a function that takes a positive integer and return its factorial.
   The factorial of 0 is 1.
   The factorial of any positive integer Z is Z * (Z - 1) * (Z - 2) * . . . . . . * 1 (e.g. factorial of 3 is 3 * 2 * 1 = 6). 
   Syntax for throwing an error throw new Error("Some Message");
*/

/**
 * Return the factorial of the given number. Throws an error if the number is negative.
 * @param {number} num
 *
 * @throws {Error} - If the number is negative.
 * @returns {number}
 */
module.exports = (num) => {
   if (num < 0) {
      throw new Error("Cannot calculate a factorial of a negative number")
   }
   else if (num === 0) {
      return 1
   } else {
      let factorial = 1
      for (i = num; i > 1; i--) {
         factorial *= i
      }
      return factorial
   }
};
