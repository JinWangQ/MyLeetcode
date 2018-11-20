/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0];
    //in order to deal with negative nums
    //we need two vars imax and imin to stores the current max and min 
    for (let i = 1, imax = res, imin = res; i < nums.length; i++) {
        if (nums[i] < 0)
            [imax, imin] = [imin, imax];
        //max & min at current i
        imax = Math.max(nums[i], nums[i] * imax);
        imin = Math.min(nums[i], nums[i] * imin);
        //global max
        res = Math.max(res, imax);
    }
    return res;
};