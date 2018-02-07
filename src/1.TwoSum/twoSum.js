/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 *You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var nLength = nums.length;
    var result = [];
    var noresult = "no such numbers";
    for (var i = 0; i < nLength; i++) {
        for (var j = i + 1; j < nLength; j++) {
            if (nums[i] + nums[j] == target) {
                result[0] = i;
                result[1] = j;
                break;
            }
        }
    }
    if (!result.length) {
        return noresult;
    } else {
        return result;
    }

};