/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * pretty resemble the last problem
 * the difference is to compare the target-sum with target-result
 * sum is changing in loop
 * update result when target-sum is smaller.
 */
var threeSumClosest = function(nums, target) {
    let result = 0;
    if (nums.length <= 3) {
        for (let i = 0; i < nums.length; i++) {
            result = result + nums[i];
        }
        return result;
    }
    nums.sort(sortNum);
    result = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        let lo = i + 1,
            hi = nums.length - 1;
        while (lo < hi) {
            let sum = nums[i] + nums[lo] + nums[hi];
            if (Math.abs(target - sum) < Math.abs(target - result)) {
                result = sum;
                if (result == target) {
                    return sum;
                }
            }
            sum > target ? hi-- : lo++;
        }


    }

    return result;


};

var sortNum = function(a, b) {
    return a - b;
}