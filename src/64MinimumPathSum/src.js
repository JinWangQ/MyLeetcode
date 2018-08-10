/**
 * @param {number[][]} grid
 * @return {number}
 *
 * no extra space needed
 * get minimum for every grid, then the last grid must be the minimum
 * 
 */
var minPathSum = function(grid) {

    let width = grid[0].length,
        height = grid.length;

    if (width === 0 || height === 0)
        return 0;

    for (let i = 1; i < width; i++)
        grid[0][i] += grid[0][i - 1];

    for (let j = 1; j < height; j++)
        grid[j][0] += grid[j - 1][0];

    for (let i = 1; i < height; i++)
        for (let j = 1; j < width; j++)
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);

    return grid[height - 1][width - 1];
};