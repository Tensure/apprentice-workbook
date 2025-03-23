// profitable gamble is a game that yields a positive net profit
// net profit is calculated in the following manner: net profit = probaliity * prize - cost of playing
// return true if you think you can win

/**
 * This function determines if a gamble is profitable
 *
 * @param {number} probabilityOfWinning 
 * @param {number} prize 
 * @param {number} costOfPlaying 
 *
 * @returns {boolean}
 */
module.exports = (probabilityOfWinning, prize, costOfPlaying) => {
    const netProfit = probabilityOfWinning * prize - costOfPlaying
    return netProfit > 0
};
