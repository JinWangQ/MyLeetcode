/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 *
 * like yesterday's
 */
var removeElement = function(nums, val) {
	let n = nums.length;
	let id = 0;
	for (let i = 0; i < n; i++) {
		if (nums[i] != val)
			nums[id++] = nums[i];
	}
	return id;
};