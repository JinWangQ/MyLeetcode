/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var result = [];
    var len = nums.length;
    if (len < 4) {
        return result;
    }
    nums.sort(sortNum);

    let max = nums[len - 1];
    if (4 * nums[0] > target || 4 * max < target)
        return result;

    let z = 0;
    for (let i = 0; i < len; i++) {
        z = nums[i];
        if (i > 0 && z == nums[i - 1]) // avoid duplicates
            continue;
        if (z + 3 * max < target) // z is too small
            continue;
        if (4 * z > target) // z is too large
            break;
        if (4 * z == target) { // [z, z, z, z] is one of the answer
            if (i + 3 < len && nums[i + 3] == z)
                result.push([z, z, z, z]);
            break;
        }

        // if z does not satisfy above ifs than excute function:

        threeSumForFourSum(nums, target - z, i + 1, len - 1, result, z);
    }
    return result;
};

var threeSumForFourSum = function(nums, target, low, hi, res, z1) {
    if (low + 1 >= hi) // there is less than 3 numbers to be check
        return;

    let max = nums[hi];
    if (3 * nums[low] > target || 3 * max < target)
        return;

    let z = 0;
    for (let i = low; i < hi - 1; i++) { // i < hi - 1 makes sure there can be left 3 numbers to be check
        z = nums[i];
        if (i > low && z == nums[i - 1]) // avoid duplucates
            continue;
        if (z + 2 * max < target) // z is too small
            continue;
        if (3 * z > target) // z is to large
            break;
        if (3 * z == target) {
            if (i + 1 < hi && nums[i + 2] == z) // i+1<hi makes sure at least 3 nums left
                res.push([z1, z, z, z]);
            break;
        }
        twoSumForFourSum(nums, target - z, i + 1, hi, res, z1, z);
    }
};

var twoSumForFourSum = function(nums, target, low, hi, res, z1, z2) {
    if (low >= hi)
        return;

    if (2 * nums[low] > target || 2 * nums[hi] < target)
        return;

    let i = low,
        j = hi,
        sum = 0,
        x = 0;
    while (i < j) {
        sum = nums[i] + nums[j];
        if (sum == target) {
            res.push([z1, z2, nums[i], nums[j]]);

            x = nums[i];
            while (++i < j && x == nums[i]) // avoid duplicates
            ;
            x = nums[j];
            while (i < --j && x == nums[j]) //avoid duplicates
            ;
        }
        if (sum < target)
            i++;
        if (sum > target)
            j--;
    }
    return;
};

var sortNum = function(a, b) {
    return a - b;
};