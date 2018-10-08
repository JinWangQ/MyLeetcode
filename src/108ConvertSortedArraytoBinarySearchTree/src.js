/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    let n = nums.length;
    if (n === 0) return null;

    return helper(0, n - 1, nums);

};
//the key of recursive method is low and high, which can return us sub-left/right tree
var helper = function(low, high, nums) {
    if (low > high)
        return null;
    let root_index = Math.floor((high + low) / 2);
    let root = new TreeNode(nums[root_index]);
    root.left = helper(low, root_index - 1, nums);
    root.right = helper(root_index + 1, high, nums);

    return root;
}