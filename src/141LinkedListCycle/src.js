/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	if (head === null) return false;
	let walk = head,
		runner = head;

	while (runner.next != null && runner.next.next != null) {
		walk = walk.next; //since walk moves 1 step at a time, if there is a cycle, runner will meet walk
		runner = runner.next.next;
		if (walk === runner) return true;
	}
	return false;
};