/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 
 * transpose
    1  2  3             
    4  5  6
    7  8  9

    after transpose

    1  4  7
    2  5  8
    3  6  9

    Then flip the matrix horizontally

    7  4  1
    8  5  2
    9  6  3

 */
var rotate = function(matrix) {
    //transpose
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    //flip vertically
    for (let i = 0; i < matrix.length; i++)
        matrix[i].reverse();

};