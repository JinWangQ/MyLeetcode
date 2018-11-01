/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * recursive way
 * from the children node to the root node
 * update `max` when needed
 * the return of helper is actually either left or right depends on which one is larger
 */
var maxPathSum = function(root) {
	let max = Number.MIN_SAFE_INTEGER;
	var helper = (node) => {
		let left = node.left ? helper(node.left) : 0;
		let right = node.right ? helper(node.right) : 0;
		max = Math.max(max, node.val + left + right);
		return Math.max((Math.max(left, right) + node.val), 0);
	};
	helper(root);
	return max;
};