/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let width = obstacleGrid[0].length,
        height = obstacleGrid.length;

    let dp = [];
    dp.length = width;
    dp.fill(0);
    dp[0] = 1;

    //the only difference is to check if this point with abstacle
    for (let i = 0; i < height; i++)
        for (let j = 0; j < width; j++) {
            if (obstacleGrid[i][j] == 1)
                dp[j] = 0;
            else if (j > 0)
                dp[j] += dp[j - 1];
        }

    return dp[width - 1];
};