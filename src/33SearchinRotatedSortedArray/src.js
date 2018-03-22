/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length;
    let lo = 0,
        hi = n - 1,
        mid = 0;
    //first use binary search to find the smallest number
    while (lo < hi) {
        mid = Math.floor((lo + hi) / 2);
        if (nums[mid] > nums[hi])
            lo = mid + 1;
        else
            hi = mid;
    }
    let pivot = lo;
    lo = 0;
    hi = n - 1;
    while (lo <= hi) {
        mid = Math.floor((lo + hi) / 2);
        //the position of realmid is actually 'mid steps' away from pivot
        let realmid = (pivot + mid) % n;
        if (nums[realmid] == target) return realmid;
        if (nums[realmid] < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
};