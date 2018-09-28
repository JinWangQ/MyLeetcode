/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) return [];
    let res = [];
    let queue = [];

    queue.push(root);
    while (queue && queue.length > 0) {
        let levelNum = queue.length; //key
        let subList = [];
        for (i = 0; i < levelNum; i++) {
            if (queue[0].left != null) queue.push(queue[0].left);
            if (queue[0].right != null) queue.push(queue[0].right);
            subList.push(queue.shift().val);
        }
        res.push(subList);
    }
    return res;
};