/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * swap the number from p1 - p2,
 * i mark the current number to be compare
 * 
 */
var sortColors = function(nums) {
	let p1 = 0,
		p2 = nums.length - 1;

	let i = 0;

	while (i <= p2) {
		if (nums[i] == 0) {
			nums[i] = nums[p1];
			nums[p1] = 0;
			p1++;
		}
		if (nums[i] == 2) {
			nums[i] = nums[p2];
			nums[p2] = 2;
			p2--;
			i--;
		}
		i++;
	}


};