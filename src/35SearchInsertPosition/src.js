/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let length = nums.length;
    if (target >= nums[length - 1]) {
        return target == nums[length - 1] ? length - 1 : length;
    }
    if (target <= nums[0]) {
        return 0;
    }
    for (let i = 0; i < length; i++) {
        if (target > nums[i])
            continue;
        if (target == nums[i])
            return i;
        if (target < nums[i])
            return i;
    }

};