/**
 * @param {number[]} nums
 * @return {number}
 */
//brute force low performance
// var findMin = function(nums) {
//     for(let i = 0; i < nums.length - 1; i++){
//         if(nums[i] > nums[i+1])
//             return nums[i+1]
//     }
//     return nums[0];
// };
//binary search, way better performance
var findMin = nums => {
    let low = 0,
        high = nums.length - 1;
    while (low < high) {
        if (nums[low] < nums[high])
            return nums[low];

        //~~(double NOT bitwise operator) is faster subtitude of Math.floor
        //when dealing with non negative number
        let mid = ~~((low + high) / 2);

        if (nums[low] <= nums[mid])
            low = mid + 1;
        else
            high = mid;
    }
    return nums[low];
}