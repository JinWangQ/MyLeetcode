/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     if(nums.length < 2) return false;
//     let dic = new Map();
//     for(let i = 0; i < nums.length; i++){
//         if(dic.has(nums[i])) return true;
//         dic.set(nums[i]);
//     }
//     return false;
// };
const containsDuplicate = nums => {
	if (nums.length < 2) return false;
	let s = new Set(nums);
	if (s.size != nums.length) return true;
	return false;
};