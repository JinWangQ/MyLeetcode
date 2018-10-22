/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];

    for (let i = 0; i < numRows; i++) {
        // row i has i numbers
        let temp = new Array(i + 1);
        // the first and last element is 1
        temp[0] = 1;
        temp[temp.length - 1] = 1;

        if (numRows > 1) {
            for (let j = 1; j <= Math.floor(i / 2); j++) {
                // every row is mirroed from the center
                temp[j] = temp[temp.length - j - 1] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }


        res.push(temp);
    }

    return res;
};