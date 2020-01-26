// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// Notes: 
//   - Single-element arrays count as (trivially) having identical elements.
module.exports = (arr) => {
    let numSame = 0;
    for (let curIdx = 0; curIdx < arr.length; curIdx++){
        const curArray = arr[curIdx];
        let same = true;
        for (let i = 0; i < curArray.length; i++) {
            if (i != 0) {
                if (curArray[i] !== curArray[i-1]) {
                    same = false;
                }
            }
        }
        if (same) {
            numSame++;
        }
    }
    return numSame;
}
