/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 *
 * use backtracking
 * 
 */
var combine = function(n, k) {
    var result = [],
        templist = [];
    backtrack(result, templist, 1, n, k);
    return result;
};

var backtrack = function(result, templist, start, n, k) {
    if (k === 0) {
        var temp = templist.slice();
        result.push(temp);
        return;
    }
    for (let i = start; i <= n; i++) {
        templist.push(i);
        backtrack(result, templist, i + 1, n, k - 1);
        templist.pop();
    }
};