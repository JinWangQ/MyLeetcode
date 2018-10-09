/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
/**
 * same as #108, convert list to array, then build a BST
 */
var sortedListToBST = function(head) {
    if (head === null) return null;

    let array = [];
    while (head != null) {
        array.push(head.val);
        head = head.next;
    }

    return helper(array, 0, array.length - 1);

};

var helper = function(nums, low, high) {
    if (low > high) return null;

    let root_index = Math.floor((low + high) / 2);
    let root = new TreeNode(nums[root_index]);
    root.left = helper(nums, low, root_index - 1);
    root.right = helper(nums, root_index + 1, high);
    return root;
};