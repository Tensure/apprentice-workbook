// Check if the time is before noon
// time is in military time 0-24

/**
 * Function to determine if it is before noon
 * @param {number} hour assume between 0-24
 *
 * @returns {boolean}
 */
module.exports = (hour) => {
    return hour < 12;
}