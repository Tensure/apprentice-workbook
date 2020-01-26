// Write a function that returns the greatest common divisor (GCD) of two integers.
// Notes: 
//   - Both values will be positive.
//   - The GCD is the largest factor that divides both numbers.
module.exports = (int1, int2) => {
    const big = int1 > int2 ? int1 : int2;
    const little = int1 > int2 ? int2 : int1;
    if (big % little == 0){
        return little;
    }
    for (var num = Math.floor(little/2); num > 2; num--) {
        if (little % num == 0) {
            if (big % num == 0) {
                return num;
            }
        }
    }
    return 1;
}
