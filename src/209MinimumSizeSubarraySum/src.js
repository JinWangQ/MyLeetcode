/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
//low performance
// var minSubArrayLen = function(s, nums) {
//     if (s > nums.reduce((acc, val) => acc + val, 0)) return 0;

//     let min = nums.length;
//     for(let i = 0; i < nums.length - 1; i++){
//         if(nums[i] >= s) return 1;
//         let j = i + 1;
//         let sum = nums[i];
//         while(j < nums.length){
//             sum += nums[j];
//             if(sum >= s) {
//                 min = Math.min(min, j - i + 1);
//                 break;
//             }
//             j++;
//         }
//     }
//     return min;
// };

const minSubArrayLen = (s, nums) => {
    if (nums.length == 0 || nums == null) return 0;
    let i = 0,
        j = 0,
        min = nums.length + 1,
        sum = 0;
    while (j < nums.length) {
        sum += nums[j];
        j++;
        // the key part, it kind of like a window i to j, 
        // and the target is to find min i to j that satisfies (sum >= s)
        while (sum >= s) {
            min = Math.min(min, j - i);
            sum -= nums[i];
            i++;
        }
    }
    return min == nums.length + 1 ? 0 : min;
};