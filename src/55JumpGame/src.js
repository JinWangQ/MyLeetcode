/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	let n = nums.length;
	let currentMax = 0,
		nextMax = 0,
		i = 0;

	while (currentMax - i + 1 > 0) {
		for (; i <= currentMax; i++) { // update the max reach
			nextMax = Math.max(nextMax, nums[i] + i);
			if (nextMax >= n - 1) return true; // when the node can reach the last node, return true
		}
		currentMax = nextMax;
	}
	return false;
};