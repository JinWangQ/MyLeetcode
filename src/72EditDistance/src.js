/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 *
 * find best -> DP problem
 * 
 */
var minDistance = function(word1, word2) {
    let m = word1.length,
        n = word2.length;

    let cost = [];
    for (let i = 0; i <= m; i++) {
        cost[i] = new Array(n + 1);
        cost[i][0] = i;
    }

    for (let i = 1; i <= n; i++)
        cost[0][i] = i;

    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) {
            if (word1.charAt(i) == word2.charAt(j))
                cost[i + 1][j + 1] = cost[i][j];
            else {
                cost[i + 1][j + 1] = Math.min(cost[i][j], cost[i + 1][j], cost[i][j + 1]);
                cost[i + 1][j + 1]++;
            }
        }

    return cost[m][n];

};