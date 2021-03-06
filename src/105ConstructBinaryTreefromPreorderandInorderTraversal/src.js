/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/**
 * the first element in array preosder is the root of the whole tree
 * find this element in array inorder
 * then the sub-left-tree is at it left hand side, sub-right-tree is the same
 * 
 */
var buildTree = function(preorder, inorder) {
    return helper(0, 0, inorder.length - 1, preorder, inorder);
};

var helper = function(preStart, inStart, inEnd, preorder, inorder) {
    if (preStart > preorder.length - 1 || inStart > inEnd) return null;

    let root = new TreeNode(preorder[preStart]);
    let inIndex = 0;
    for (let i = inStart; i <= inEnd; i++)
        if (inorder[i] == root.val) {
            inIndex = i;
            break;
        }
    root.left = helper(preStart + 1, inStart, inIndex - 1, preorder, inorder);
    root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder);
    return root;
}