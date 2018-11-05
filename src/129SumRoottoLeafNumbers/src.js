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
// recursive
// var sumNumbers = function(root) {
//     return helper(root, 0);
// };

// var helper = (cur, sum) => {
//     if(cur === null) return 0;
//     if(!cur.left && !cur.right) return sum*10+cur.val;
//     return helper(cur.left, sum*10 + cur.val) + helper(cur.right, sum*10 + cur.val);
// };
// non recursove, better performance
var sumNumbers = function(root) {
    let sum = 0;
    if (root === null) return sum; // for test case: root=[]
    let stack = [];
    stack.push(root);
    let cur = new TreeNode();

    while (stack.length > 0) {
        cur = stack.pop();

        if (cur.right != null) {
            cur.right.val = cur.val * 10 + cur.right.val;
            stack.push(cur.right);
        }

        if (cur.left != null) {
            cur.left.val = cur.val * 10 + cur.left.val;
            stack.push(cur.left);
        }

        if (!cur.left && !cur.right) {
            sum += cur.val;
        }
    }
    return sum;
};