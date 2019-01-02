/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = nums => {
	// encounter nums[i], flip number at position (nums[i] - 1)
	// if it already nagetive, it has appeared before 
	let res = [];
	for (let i = 0; i < nums.length; ++i) {
		let index = Math.abs(nums[i]) - 1;
		if (nums[index] < 0) {
			res.push(Math.abs(index + 1));
		}
		nums[index] = -nums[index];
	}
	return res;
}