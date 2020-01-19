// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.
module.exports = (arr) => {
    for (let num = 1; num < 11; num++) {
        let found = false;
        for (let i = 0; i < arr.length; i++) {
            let curNum = arr[i];
            if (curNum == num) {
                found = true;
            }
        }
        if (found == false) {
            return num;
        }
    }
    return -1;
}