/**
 * @param {number[]} nums
 * @return {number}
 */
//35.14%
// var findPeakElement = function(nums) {
//     if(nums[0] > nums[1] || nums.length == 1) return 0;
//     if(nums[nums.length - 1] > nums[nums.length - 2])
//         return nums.length - 1;
//     for(let i = 1; i <= nums.length - 2; i++){
//         if(nums[i] > nums[i-1] && nums[i] > nums[i+1])
//             return i;
//     }

// };
//binary search 100%
const findPeakElement = nums => {
    let low = 0,
        high = nums.length - 1;
    while (low < high) {
        let mid1 = Math.floor((low + high) / 2),
            mid2 = mid1 + 1;
        if (nums[mid1] > nums[mid2])
            high = mid1;
        else
            low = mid2;
    }
    return low;
}