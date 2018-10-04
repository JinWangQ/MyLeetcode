/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 *
 * same idea with #105
 * the trick is to set recursive parameters of left sub-tree and right sub-tree
 */
var buildTree = function(inorder, postorder) {
    if (inorder == null || postorder == null || inorder.length != postorder.length) return null;
    return helper(postorder, postorder.length - 1, 0, inorder.length - 1, inorder);

};

var helper = function(postorder, idx, inStart, inEnd, inorder) {
    if (inStart > inEnd || idx < 0) return null;
    let root = new TreeNode(postorder[idx]);
    let inIndex = 0;
    for (let i = 0; i <= inEnd; i++)
        if (root.val == inorder[i]) {
            inIndex = i;
            break;
        }
    root.right = helper(postorder, idx - 1, inIndex + 1, inEnd, inorder);
    root.left = helper(postorder, idx - (inEnd - inIndex + 1), inStart, inIndex - 1, inorder);

    return root;
}