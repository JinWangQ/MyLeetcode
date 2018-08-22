/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 *
 * or for each row, do a binary search
 * 
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0)
        return false;
    let rows = matrix.length,
        cols = matrix[0].length;

    let low = 0,
        high = rows * cols - 1;

    while (low <= high) {
        let mid = (low + high) >> 1,
            mid_val = matrix[Math.floor(mid / cols)][mid % cols];

        if (target == mid_val)
            return true;
        else if (target < mid_val)
            high = high - 1;
        else
            low = low + 1;
    }

    return false;
};