/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    if (matrix.length === 0) return res;

    let rowBegin = 0,
        rowEnd = matrix.length - 1,
        colBegin = 0,
        colEnd = matrix[0].length - 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        //traverse right
        for (let j = colBegin; j <= colEnd; j++) {
            res.push(matrix[rowBegin][j]);
        }
        rowBegin++; //1 row has been traversed

        //traverse down
        for (let i = rowBegin; i <= rowEnd; i++) {
            res.push(matrix[i][colEnd])
        }
        colEnd--; //1 col has been traversed

        if (rowBegin <= rowEnd) {
            //traverse left
            for (let j = colEnd; j >= colBegin; j--) {
                res.push(matrix[rowEnd][j]);
            }
        }
        rowEnd--; //1 row has been traversed

        if (colBegin <= colEnd) {
            //traverse up
            for (let i = rowEnd; i >= rowBegin; i--) {
                res.push(matrix[i][colBegin]);
            }
        }
        colBegin++; //1 col has been traversed
    }
    return res;
};