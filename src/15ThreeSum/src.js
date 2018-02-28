/**
 * @param {number[]} nums
 * @return {number[][]}
 * the trick is saving as much time as you can
 */

var threeSum = function(nums) {
	let result = [];
	if (nums.length < 3) {
		return result;
	}
	//real 'sort' in javascript
	nums.sort(sortNum);
	//outer loop 
	for (let i = 0; i < nums.length - 2; i++) {
		//do not need to scan all the elements
		if (nums[i] > 0) {
			return result;
		}
		//avoid same result
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		let sum = -nums[i];
		let lo = i + 1,
			hi = nums.length - 1;
		while (lo < hi) {
			if (nums[lo] + nums[hi] == sum) {
				result.push([nums[i], nums[lo], nums[hi]]);
				lo++;
				hi--;
				// if the new lo and high are the same as previous
				// keep changing lo and high
				while (lo < hi && nums[lo] == nums[lo - 1])
					lo++;
				while (lo < hi && nums[hi] == nums[hi + 1])
					hi--;
			} else if (nums[lo] + nums[hi] > sum) {
				hi--;
			} else lo++;

		}

	}
	return result;

};

var sortNum = function(a, b) {
	return a - b;
};