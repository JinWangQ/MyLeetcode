/**
 * @param {number[]} nums
 * @return {number[][]}
 * array used is to store true or false to represent if this number has been used already
 */
var permuteUnique = function(nums) {
    var result = [],
        templist = [],
        used = [];
    nums.sort(sortNum);
    backtrack(result, templist, nums, used);
    return result;
};

var backtrack = function(result, templist, nums, used) {
    if (templist.length == nums.length) {
        var temp = templist.slice();
        result.push(temp);
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (used[i] || i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            templist.push(nums[i]);
            backtrack(result, templist, nums, used);
            used[i] = false;
            templist.pop();
        }
    }
};

var sortNum = function(a, b) {
    return a - b;
};