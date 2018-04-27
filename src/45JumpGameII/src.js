/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length;
    if (n < 2) return 0;
    let level = 0,
        currentMax = 0,
        nextMax = 0,
        i = 0;

    while (currentMax - i + 1 > 0) {
        level++; // level i nodes can be reach in (i-1)th jump
        for (; i <= currentMax; i++) { // update the max reach
            nextMax = Math.max(nextMax, nums[i] + i);
            if (nextMax >= n - 1) return level; // when the node can reach the last node, return level
        }
        currentMax = nextMax;
    }
    return 0;
};