/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var result = [],
        templist = [];
    candidates.sort(sortNum);
    backtrack(result, templist, candidates, target, 0);
    return result;
};

var backtrack = function(result, templist, candidates, remain, start) {
    if (remain < 0) return;
    else if (remain == 0) {
        var temp = templist.slice();
        result.push(temp);
    } else {
        for (let i = start; i < candidates.length && candidates[i] <= remain; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) continue; //avoid the duplicates
            templist.push(candidates[i]);
            backtrack(result, templist, candidates, remain - candidates[i], i + 1); // start from i + 1
            templist.pop();
        }
    }
};

var sortNum = function(a, b) {
    return a - b;
};