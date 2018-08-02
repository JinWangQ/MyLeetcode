/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n == 1)
        return [
            [1]
        ];
    //create a new 2d array
    let res = new Array(n);
    for (let i = 0; i < n; i++) {
        res[i] = new Array(n);
    }

    let rowStart = 0,
        rowEnd = n - 1,
        colStart = 0,
        colEnd = n - 1;
    let count = 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {

        // ->
        for (let i = colStart; i <= colEnd; i++) {
            res[rowStart][i] = count++;
        }
        rowStart++;

        // |
        // V
        for (let i = rowStart; i <= rowEnd; i++) {
            res[i][colEnd] = count++;
        }
        colEnd--;

        // <-
        for (let i = colEnd; i >= colStart; i--) {
            res[rowEnd][i] = count++;
        }
        rowEnd--;

        // ^
        // |
        for (let i = rowEnd; i >= rowStart; i--) {
            res[i][colStart] = count++;
        }
        colStart++;

    }
    return res;
};