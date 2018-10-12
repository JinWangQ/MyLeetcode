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
 * @return {boolean}
 */
//non-recursive way

// var hasPathSum = function(root, sum) {
//     if(root === null) return false;
//     let stack = [];
//     //pre is to mark visited right-child-node to ensure the function not going to a dead loop
//     //e.g [5,4,8,11,null,13,4,7,2,null,null,null,1], node 11 and its right-child-node 2
//     let pre = new TreeNode(),
//         cur = root;
//     let res = 0;

//     while(cur || stack.length>0) {
//         while(cur){
//             stack.push(cur);
//             res+=cur.val;
//             cur = cur.left;
//         }
//         cur = stack[stack.length-1];

//         if(cur.left === null && cur.right === null && (res-sum) === 0) return true;

//         if(cur.right && cur.right != pre){
//             cur = cur.right;
//         }else{
//             res-=cur.val;
//             pre = cur;
//             stack.pop();
//             cur=null;

//         }
//     }
//     return false;
// };

// recursive way
var hasPathSum = function(root, sum) {
	if (root === null) return false;

	if (root.left === null && root.right === null && (root.val - sum === 0)) return true;

	return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);

};