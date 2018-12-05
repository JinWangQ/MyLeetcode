/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//     let xor = 0, i = 0;
//     for(; i < nums.length; i++){
//         xor = xor ^ i ^ nums[i];
//     }
//     return xor ^ i;
// };

const missingNumber = nums => {
	let expected = nums.length,
		sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		expected += i;
	}
	return expected - sum;
}