// use object as data structure
// const containsNearbyDuplicate = (nums, k) => {
// 	let seen = {};
// 	for(let i = 0; i < nums.length; i++){
// 		if(nums[i] in seen && i - seen[nums[i]] <= k) return true;
// 		seen[nums[i]] = i;
// 	}
// 	return false;
// }

// use Map
const containsNearbyDuplicate = (nums, k) => {
	let seen = new Map();
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		if (seen.has(num) && i - seen.get(num) <= k) return true;
		seen.set(num, i);
	}
	return false;
}