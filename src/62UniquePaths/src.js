/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * the amount of ways to point(i, j) = (i-1, j) + (i, j-1)
 */
var uniquePaths = function(m, n) {
    if (m <= 0 || n <= 0)
        return 0;
    if (m > n) return uniquePaths(n, m)

    let res = [];
    res.length = n;
    res.fill(0);
    res[0] = 1;

    for (let i = 0; i < m; i++)
        for (let j = 1; j < n; j++)
            res[j] += res[j - 1];

    return res[n - 1];


};