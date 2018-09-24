/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
/**
 * the trick is to consider in-order traverse(LNR)
 * since when traversing a BST using LNR, the sequence is ascending
 * and there are only two nodes swtiched,
 * when we find where there is not ascending, there should be a
 switch.
 *
 * e.g
 * [6,3,4,5,2]
 * should be
 * [2,3,4,5,6]
 * when in-order traversing
 *
 * so first mark position of 6 where 6>3
 * and second mark position of 2 where 5>2 
 * 
 */
var recoverTree = function(root) {
    if (root == null) return;

    let node = root,
        first = null,
        second = null,
        pre = null,
        stack = [];

    while (node != null || (stack && stack.length)) {
        if (node != null) {
            stack.push(node);
            node = node.left;
        } else {
            //in-order businese area
            node = stack.pop();
            if (pre != null) {
                if (node.val < pre.val) {
                    if (first == null)
                        first = pre;

                    if (first != null)
                        second = node;
                }
            }
            pre = node;
            //
            node = node.right;
        }
    }

    let temp = first.val;
    first.val = second.val;
    second.val = temp;


};