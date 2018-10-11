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
//recursive way:
//leaf node return 1,
//other node return its minDepth

// var minDepth = function(root) {
//     if(root === null) return 0;
//     let left = minDepth(root.left);
//     let right = minDepth(root.right);
//     return (left === 0 || right === 0) ? left + right + 1 : Math.min(left, right) + 1;

// };

var minDepth = function(root) {
    if (root === null) return 0;
    let queue = [];
    queue.push(root);

    //minDepth at least is 1 because of root node
    //curLevel marks the number of nodes in current level
    //nextLevel marks the number of nodes in next level
    let minDepth = 1,
        curLevel = 1,
        nextLevel = 0;

    while (queue && queue.length > 0) {
        let node = queue.shift();

        curLevel--;

        if (node.left) {
            queue.push(node.left);
            nextLevel++;
        }

        if (node.right) {
            queue.push(node.right);
            nextLevel++;
        }

        if (node.left === null && node.right === null) {
            return minDepth; // as long as we visit the first leaf node, we can return
        }

        if (curLevel === 0) {
            minDepth++;
            curLevel = nextLevel;
            nextLevel = 0;
        }

    }
    return minDepth;
};