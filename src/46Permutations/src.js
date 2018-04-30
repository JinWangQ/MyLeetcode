/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [],
        templist = [];
    backtrack(result, templist, nums);
    return result;
};

var backtrack = function(result, templist, nums) {
    if (templist.length == nums.length) {
        var temp = templist.slice();
        result.push(temp);
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (templist.includes(nums[i])) continue;
            templist.push(nums[i]);
            backtrack(result, templist, nums);
            templist.pop();
        }
    }
};