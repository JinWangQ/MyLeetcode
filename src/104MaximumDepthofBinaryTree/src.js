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
/**
 *  recursive method:
    var maxDepth = function(root) {
        if (!root) return 0;
        return 1+Math.max(maxDepth(root.left), maxDepth(root.right));
    };
 * 
 */
/**
 * same as problem#102, the length of the array is the depth of the tree.
 */
var maxDepth = function(root) {
    if (root == null) return 0;
    let res = [];
    let queue = [];

    queue.push(root);
    while (queue && queue.length > 0) {
        let levelNum = queue.length;
        let subList = []
        for (i = 0; i < levelNum; i++) {
            if (queue[0].left != null) queue.push(queue[0].left);
            if (queue[0].right != null) queue.push(queue[0].right);
            subList.push(queue.shift().val);
        }
        res.push(subList);
    }
    return res.length;
};