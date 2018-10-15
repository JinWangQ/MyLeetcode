/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

var pathSum = function(root, sum) {
    let result = [];
    helper(root, sum, [], result);
    return result;
};

var helper = function(node, sum, currentRes, result) {
    if (node === null) return;
    currentRes.push(node.val);
    if (node.left === null && node.right === null && (node.val - sum === 0)) {
        result.push(currentRes.concat([]));
        //push a new array to result or it will change the result
        currentRes.pop();
        return;
    } else {
        helper(node.left, sum - node.val, currentRes, result);
        helper(node.right, sum - node.val, currentRes, result);
    }

    currentRes.pop();
};