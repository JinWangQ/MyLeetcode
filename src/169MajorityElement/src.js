/**
 * @param {number[]} nums
 * @return {number}
 */
//sort first, then count. low performance, 23%
// var majorityElement = function(nums) {
//     nums.sort((a, b) => {
//         return a-b;
//     })
//     let count  = 1;
//     let max = 0;
//     let i = 1;
//     while(max < Math.ceil(nums.length / 2) && i < nums.length){
//         if(nums[i] == nums[i-1]) 
//             count++;
//         else{
//             max = Math.max(count, max);
//             if(max >= Math.ceil(nums.length / 2))
//                 return nums[i-1];
//             count = 1;
//         }
//         i++;
//     }
//     return nums[nums.length-1];
// };
//one pointer -> current
//change pointer when count is 0.
const majorityElement = nums => {
    let count = 0;
    let current = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            count++;
            current = nums[i];
        } else {
            count += (nums[i] === current) ? 1 : -1;
        }
    }
    return current;
};