/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length < 2) return nums.length;
    nums = nums.sort(numsort);
    let max = 0,
        temp = 1;
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] === nums[i - 1]) {
            max = Math.max(temp, max);
            continue;
        } else if (nums[i] - 1 == nums[i - 1]) {
            temp++;
        } else {
            temp = 1;
        }
        max = Math.max(temp, max);
    }
    return max;
};

var numsort = (a, b) => {
    return a - b;
}