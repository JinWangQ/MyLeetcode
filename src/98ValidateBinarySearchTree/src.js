/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * better and easily understandable recursive one from Leetcode submission:
 var isValidBST = function(root, lower, upper) {
    if (!root) return true;
    if (lower === undefined) lower = -Infinity;
    if (upper === undefined) upper = Infinity;
    if (root.val >= upper) return false;
    if (root.val <= lower) return false;
    if (root.left && !isValidBST(root.left, lower, root.val)) {
        return false;
    }
    if (root.right && !isValidBST(root.right, root.val, upper)) {
        return false;
    }
    
    return true;
};
 */
/**
 * e.g
 *   5
 *  / \
 * 1   4
 *     /\
 *    3  6
 *
 * when pre = 5, stack[4, 3]
 * then root = stack.pop() = 3
 * root.val <= pre.val -> false 
 * 
 */
var isValidBST = function(root) {
    if (root == null) return true;

    let pre = new TreeNode(),
        stack = [];
    while (root != null || stack.length != 0) {
        while (root != null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        //now root should be at right side of pre
        if (pre != null && root.val <= pre.val) return false;
        pre = root;
        root = root.right;
    }
    return true;
};