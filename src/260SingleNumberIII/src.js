/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    //diff is the XOR of the two numbers we want
    //diff has at least one set bit
    let diff = 0;
    for (let i = 0; i < nums.length; i++) {
        diff ^= nums[i];
    }

    // -diff = -(diff-1+1) = ~(diff-1)
    //get its least significant set bit
    diff &= -diff;

    //we can divide numbers in nums into to sets, 
    //one has the 'set bit' set; the other has 'set bit' unset
    //and the two we want also fall into two.
    let res = [0, 0];
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] & diff) === 0)
            res[0] ^= nums[i];
        else
            res[1] ^= nums[i];
    }
    return res;

};