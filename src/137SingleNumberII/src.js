/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * Don't to into the bitwise operation
 * regard single and triple as sets
 * when a number appears first time, it will be put into set single
 * if it appears again, it will be removed from set single and put into set twice,
 * if it appears third time, it will be remove from twice
 */
var singleNumber = function(nums) {
	let single = 0,
		twice = 0;
	for (let i = 0; i < nums.length; i++) {
		single = (single ^ nums[i]) & ~twice; //store number only appears once and doesn't store in set twice
		twice = (twice ^ nums[i]) & ~single;
	}
	return single;
};