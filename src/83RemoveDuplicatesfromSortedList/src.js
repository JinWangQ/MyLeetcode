/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * non-recursive
 * var deleteDuplicates = function(head) {
 *   var curr = head;
 *   
 *   while (curr && curr.next) {
 *       if (curr.val == curr.next.val) {
 *           curr.next = curr.next.next;
 *       }else{
 *           curr = curr.next;
 *       }
 *   }
 *   
 *   return head;
 * };
 *
 * use recursive to go to the end of the list
 * then 'return' back the different node
 */
var deleteDuplicates = function(head) {
	if (head == null || head.next == null) return head;
	head.next = deleteDuplicates(head.next);
	return head.val == head.next.val ? head.next : head;
};