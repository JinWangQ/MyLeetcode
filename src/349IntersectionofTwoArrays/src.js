var intersection = function (nums1, nums2) {
    if (nums1.length > nums2.length) return intersection(nums2, nums1);
    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i]) && !res.includes(nums1[i]))
            res.push(nums1[i]);
    }
    return res;
};