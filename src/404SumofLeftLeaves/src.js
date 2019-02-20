/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * The constructure is always like to dealing with one node. 
 */
var sumOfLeftLeaves = function (root) {
    if (root == null) return 0;
    let res = 0;
    if (root.left != null) {
        // check if this node is a left leaf node
        if (root.left.left == null && root.left.right == null) res += root.left.val;
        // if the node is not a leaf node, go down the tree
        else res += sumOfLeftLeaves(root.left);
    }
    res += sumOfLeftLeaves(root.right);
    return res;
};