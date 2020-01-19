// Challenge link here: https://edabit.com/challenge/rgdT9sZ4QhsKhaSw9
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