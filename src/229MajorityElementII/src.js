/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = nums => {
	return getRes(nums);
}

const getRes = nums => {
	let res = {};
	let set = {};
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		if (!set[num]) {
			set[num] = 1;
		} else {
			set[num]++;
		}
		if (!res[num] && set[num] / nums.length > 1 / 3) {
			res[num] = 1;
		}
	}
	return Object.keys(nums).map(Number);
}