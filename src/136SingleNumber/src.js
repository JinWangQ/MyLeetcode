/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * XOR -> ^
 * if a===b a^b = 0
 * since numbers appear in pairs, XOR every number in array can
 * leave us the only single one.
 */
var singleNumber = function(nums) {
	let res = 0;
	for (let i = 0; i < nums.length; i++) {
		res ^= nums[i];
	}
	return res;
};