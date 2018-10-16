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
// another method
// var flatten = (root) => {
//     root = helper(root, null) 
// };

// let helper = (root, pre) => {
//     if(!root) return pre;
//     pre = helper(root.right, pre);
//     pre = helper(root.left, pre); 
//     root.right = pre;
//     root.left = null;
//     pre = root;
//     return root;
// };

var flatten = (root) => {
    helper(root);
};

var helper = (root) => {
    if (!root) return null;

    let leftLast = helper(root.left),
        rightLast = helper(root.right);

    if (leftLast) {
        leftLast.right = root.right;
        root.right = root.left;
        root.left = null;
    }

    if (rightLast) return rightLast;

    if (leftLast) return leftLast;

    return root;

};