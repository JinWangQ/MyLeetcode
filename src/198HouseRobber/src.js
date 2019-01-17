/**
 * @param {number[]} nums
 * @return {number}
 */
// easy understanding
// avoid the adjacent house
var rob = function(nums) {
	let a = 0,
		b = 0;
	for (let i = 0; i < nums.length; i++) {
		if (i % 2 === 0) {
			a = Math.max(a + nums[i], b);
		} else {
			b = Math.max(a, b + nums[i]);
		}
	}
	return Math.max(a, b);
}
//better performance
//use another variable temp to store one value before
var rob = function(nums) {
	let cur = 0,
		pre = 0;
	for (let i = 0; i < nums.length; i++) {
		let temp = cur;
		cur = Math.max(pre + nums[i], cur);
		pre = temp;
	}
	return cur;
}