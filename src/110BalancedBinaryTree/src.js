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
/**
 * The key for recursive is to find a pattern for one element and can
 * be used for all the other elements.
 */
var isBalanced = function(root) {
	if (root === null) return true;
	let left = helper(root.left);
	let right = helper(root.right);

	return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

var helper = function(node) {
	if (node === null) return 0;
	return Math.max(helper(node.left), helper(node.right)) + 1;
};