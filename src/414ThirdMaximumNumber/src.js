/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max1 = null,
        max2 = null,
        max3 = null;
    for (let num of nums) {
        if (num == max3 || num == max2 || num == max1) continue;
        if (max1 == null || num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (max2 == null || num > max2) {
            max3 = max2;
            max2 = num;
        } else if (max3 == null || num > max3) {
            max3 = num;
        }
    }
    return max3 == null ? max1 : max3;
};