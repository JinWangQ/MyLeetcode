/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0,
        right = nums.length - 1,
        mid = 0;

    //binary search
    while (left <= right) {
        mid = (left + right) >> 1;
        if (nums[mid] == target) return true;

        //check if left part is sorted
        if (nums[left] < nums[mid] || nums[mid] > nums[right]) {
            if (target >= nums[left] && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        }

        //right part
        else if (nums[mid] < nums[right] || nums[mid] < nums[left]) {
            if (target > nums[mid] && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }

        // cases like [4, 1, 2, 4, 4, 4, 4, 4] nums[left] == nums[right] == nums[mid]
        else {
            --right;
        }
    }

    return false;

};