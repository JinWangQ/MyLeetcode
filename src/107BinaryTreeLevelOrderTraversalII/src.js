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
var levelOrderBottom = function(root) {
    if (root == null) return [];
    let res = [];

    let queue = [];
    queue.push(root);
    while (queue && queue.length > 0) {
        let tmp = [];
        let levelNum = queue.length; // key
        for (let i = 0; i < levelNum; i++) {
            if (queue[0].left != null) queue.push(queue[0].left);
            if (queue[0].right != null) queue.push(queue[0].right);
            tmp.push(queue.shift().val);
        }
        res.unshift(tmp); // only difference with #102
    }


    return res;

};