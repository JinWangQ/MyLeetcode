/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	let i = 0;
	//k go through the array
	//i is the index of new array
	for (k in nums) {
		if (i < 2 || nums[k] > nums[i - 2])
			nums[i++] = nums[k];
	}
	return i;
};