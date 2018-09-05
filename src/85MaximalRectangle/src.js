/**
 * @param {character[][]} matrix
 * @return {number}
 *
 * based on problem 84
 * calculate rectangular area from top do bottom
 * 
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0)
        return 0;
    let heights = [];
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] == "1")
            heights[i] = 1;
        else heights[i] = 0;
    }
    let currArea = getMax(heights);
    for (let i = 1; i < matrix.length; i++) {
        updateHeights(matrix, heights, i);
        currArea = Math.max(currArea, getMax(heights));
    }
    return currArea;
};

var updateHeights = function(matrix, heights, row) {
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[row][i] == "1")
            heights[i] = parseInt(heights[i]) + 1;
        else
            heights[i] = 0;
    }
}

var getMax = function(heights) {
    let n = heights.length;
    let s = [];
    let maxArea = 0;

    for (let i = 0; i <= n; i++) {
        let h = (i == n ? 0 : heights[i]);
        if (s.length == 0 || h >= heights[s[s.length - 1]])
            s.push(i);
        else {
            let currindex = s.pop(),
                currarea = heights[currindex] * (s.length == 0 ? i : i - 1 - s[s.length - 1])
            maxArea = Math.max(maxArea, currarea)
            i--;
        }
    }
    return maxArea;
};