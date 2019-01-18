/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = [];
    goRight(root, res, 0);
    return res;
};
var goRight = function(node, res, level) {
    if (node == null) {
        return;
    }
    if (res.length === level) {
        res.push(node.val);
    }
    goRight(node.right, res, level + 1);
    goRight(node.left, res, level + 1);
};