/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *
 * inorder => LNR
 * 
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let stack = [],
        res = [];

    let cur = root;

    while (cur != null || stack.length > 0) {
        //get the very left/center
        while (cur != null) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        res.push(cur.val);
        //get the right
        cur = cur.right;
    }

    return res;

};