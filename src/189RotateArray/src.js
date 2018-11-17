/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//time++ spcae--
// var rotate = function(nums, k) {
//     k %= nums.length;
//     nums = reverse(nums, 0, nums.length-1);
//     nums = reverse(nums, 0, k - 1);
//     nums = reverse(nums, k, nums.length-1);
// };

// const reverse = (nums, start, end) => {
//     while(start < end) {
//         let temp = nums[start];
//         nums[start] = nums[end];
//         nums[end] = temp;
//         start++;
//         end--;
//     }
//     return nums;
// };
//time-- space++
const rotate = (nums, k) => {
	const temp = nums.splice(nums.length - k, k); //delete k elements from nums.length - k
	nums.splice(0, 0, ...temp);
};