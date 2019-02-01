/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let answer = [];
    if(root != null) goSearch(root, "", answer);
    return answer;
};

const goSearch = (node, path, answer) => {
    if(node.left == null && node.right == null) answer.push(path + node.val);
    if(node.left != null) goSearch(node.left, path + node.val + "->", answer);
    if(node.right != null)goSearch(node.right, path + node.val + "->", answer);
}