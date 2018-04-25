/**
 * @param {number[]} height
 * @return {number}
 * two pointer
 * update the maxleft/right when the new number is larger
 * +=res when the new number is smaller than maxl/r
 */
var trap = function(height) {
    let left = 0,
        right = height.length - 1;
    let res = 0;
    let maxleft = 0,
        maxright = 0;
    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= maxleft) maxleft = height[left];
            else res += maxleft - height[left];
            left++;
        } else {
            if (height[right] >= maxright) maxright = height[right];
            else res += maxright - height[right];
            right--;
        }
    }
    return res;
};