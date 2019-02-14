/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if (nums1.length > nums2.length) return intersect(nums2, nums1);
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      res.push(nums1[i]);
      let t = nums2.indexOf(nums1[i]);
      nums2.splice(t, 1);
    }
  }
  return res;
};
