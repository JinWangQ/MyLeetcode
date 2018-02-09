/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length,
        n2 = nums2.length;
    if (n2 < n1) { //make sure n2 > n1, or j could be negative
        let temp = [];
        temp = nums1;
        nums1 = nums2;
        nums2 = temp;
        let tempn = 0;
        tempn = n1;
        n1 = n2;
        n2 = tempn;
    }
    let imin = 0,
        imax = n1;
    let halflen = Math.floor((n1 + n2 + 1) / 2);
    while (imin <= imax) {
        let i = Math.ceil((imin + imax) / 2),
            j = halflen - i;
        //make sure maxLeft < minRight, 
        //that is nums1leftmax < nums2rightmin and nums2leftmax < nums1rightmin
        if (nums2[j - 1] >= nums1[i] && i < imax) {
            imin++;
        } else if (nums1[i - 1] >= nums2[j] && i > imin) {
            imax--;
        } else {
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = nums2[j - 1];
            } else if (j === 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }
            if ((n1 + n2) % 2 == 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i == n1) {
                minRight = nums2[j];
            } else if (j == n2) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums1[i], nums2[j]);
            }

            return (maxLeft + minRight) / 2.0;
        }
    }
    return 0.0;
};
// this method is not woking 
// 1. the time complexity is O(n), need O(log(n+m))
// 2. the array.sort() sort the elements by Unicode code
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function(nums1, nums2) {
//     let num = [],
//         med = 0;
//     num = nums1.concat(nums2);
//     num = num.sort();
//     let n = num.length;
//     if ( n % 2 == 0) {
//         med = (num[n/2 -1] + num[n/2])/2;
//     } else {
//         med = num[(n-1)/2];
//     }
//     return med;
// };