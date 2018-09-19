/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * recursive is so amazing 
 * idea is similar to #96
 * when i is root, {1,..,i-1} is its left subtree and
 *                  {i+1, ... , n} is its right;
 *
 *
 * 
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n <= 0)
        return [];
    return genTree(1, n);
};

var genTree = function(start, end) {
    let res = [];

    if (start > end) {
        res.push(null);
        return res;
    }

    if (start == end) {
        res.push(new TreeNode(start));
        return res;
    }

    let left = [],
        right = [];
    for (let i = start; i <= end; i++) {
        // every node in left/right subtree could be root as well. 
        left = genTree(start, i - 1);
        right = genTree(i + 1, end);

        for (j in left)
            for (k in right) {
                let root = new TreeNode(i);
                root.left = left[j];
                root.right = right[k];
                res.push(root);
            }
    }
    return res;
};