// Create a function that takes an array of card numbers and checks if the sum of their value exceeds 21 
// or is equal to 21. 

//Values of the cards are as follows:
// 2-10 are their value.
// J-K (face cards) count as 10.
// Aces count as 1 or 11 - if counting an Ace as 11 would bring the total over 21, count it as 1.

// If the count is exactly 21 return 'Blackjack!'

/**
 *
 * @param {Array} cards mixed array of numbers and strings 
 *
 * @returns {boolean | string} true if sum exceeds 21, false if sum is under or equal to 21, 'Blackjack!' if sum is exactly 21
 */
module.exports = (cards) => {
    cards = cards.map(v => ['J', 'Q', 'K'].includes(v) ? 10 : v) 
    const aces = cards.filter(v => v === 'A')
    const numbers = cards.filter(v => v !== 'A')
    let numeric_sum = numbers.reduce((a, b) => a + b, 0)

    // Add  all Aces as 11s and then cycle through them subtracting 10 (to make them a 1 instead) until we get to 21 or below (or run out of Aces)
    numeric_sum += 11 * aces.length
    for (i = 0; i < aces.length & numeric_sum > 21; i++) {
        numeric_sum -= 10
    }

    // returns
    if (numeric_sum > 21) {
        return true
    } else if (numeric_sum === 21) {
        return "Blackjack!"
    } else {
        return false
    }
};
