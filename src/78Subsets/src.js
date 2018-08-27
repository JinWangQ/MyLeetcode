/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    let res = [],
        templist = [];

    backtrack(res, templist, nums, 0);
    return res;

};

var backtrack = function(res, templist, nums, start) {

    var temp = templist.slice();
    res.push(temp);

    for (let i = start; i < nums.length; i++) {
        templist.push(nums[i]);
        backtrack(res, templist, nums, i + 1);
        templist.pop(nums[i]);
    }

};