/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [],
        templist = [];

    nums.sort((a, b) => (a - b));

    backtrack(res, templist, nums, 0);

    return res;
};

var backtrack = function(res, templist, nums, start) {
    let temp = templist.slice();
    res.push(temp);

    for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] == nums[i - 1]) continue;
        templist.push(nums[i]);
        backtrack(res, templist, nums, i + 1);
        templist.pop(nums[i]);

    }

};