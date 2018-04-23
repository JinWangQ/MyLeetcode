/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] == i + 1 || nums[i] <= 0 || nums[i] > nums.length) i++;
        else if (nums[nums[i] - 1] != nums[i]) swap(nums, i, nums[i] - 1);
        else i++;

    }
    i = 0;
    while (i < nums.length && nums[i] == i + 1) i++;
    return i + 1;
};

var swap = function(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};