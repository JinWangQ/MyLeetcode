/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [];
    backtracking(res, [], k, 1, n)
    return res;
};

const backtracking = (res, temp, k, start, n) => {
    if (temp.length == k && n == 0) {
        res.push(temp.concat([]));
        return;
    }

    for (let i = start; i <= 9; i++) {
        if (temp.length > k) break;
        if (n < i) break;
        temp.push(i);
        backtracking(res, temp, k, i + 1, n - i);
        temp.pop();
    }

}