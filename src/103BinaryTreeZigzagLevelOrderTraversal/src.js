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
var zigzagLevelOrder = function(root) {
    if (root == null) return [];
    let res = [];
    let queue = [],
        k = true;

    queue.push(root);
    let levelNum = 1;
    while (queue && queue.length > 0) {
        let subList = [];
        for (i = 0; i < levelNum; i++) {
            let n = queue.shift();
            if (k) {
                subList.push(n.val);
            } else {
                //reverse at level 1, 3, 5, 7....
                subList.unshift(n.val);
            }
            if (n.left != null) queue.push(n.left);
            if (n.right != null) queue.push(n.right);
        }
        res.push(subList);
        levelNum = queue.length;
        k = !k;
    }
    return res;
};