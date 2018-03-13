/**
 * @param {number[]} nums
 * @return {number}
 */
//works nice locally, but cannot pass the test case in leetcode 
// var removeDuplicates = function(nums) {
//     let n = nums.length;
//     if (n === 0)
//         return [];
//     for (let i = 1; i <= n; i++) {
//         if (nums[i] != nums[i - 1]) {
//             nums.push(nums[i-1]);
//         }
//     }
//     nums = nums.slice(n);
//     return nums.length;
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length;
    if (n === 0 || n == 1)
        return nums.length;
    let id = 1;
    for (let i = 1; i < n; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[id++] = nums[i];
        }
    }
    return id;
};