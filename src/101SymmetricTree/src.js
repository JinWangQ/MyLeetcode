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
 */
var isSymmetric = function(root) {
	if (root == null) return true;
	return isMirro(root.left, root.right);
};

var isMirro = function(p, q) {
	if (p == null && q == null) return true;
	if (p == null || q == null) return false;
	return (p.val == q.val) && isMirro(p.left, q.right) && isMirro(p.right, q.left);
};