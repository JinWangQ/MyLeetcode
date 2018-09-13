/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 *
 * 1   2     3    4 5
 * pre start then
 * 
 * 1   3 2     4    5
 * pre   start then
 *
 * 1   4 3 2     5
 * pre     start then
 */
var reverseBetween = function(head, m, n) {
    if (head == null) return null;
    let dummyHead = new ListNode(0);
    dummyHead.next = head;

    let pre = dummyHead;

    for (let i = 0; i < m - 1; i++) pre = pre.next;

    let start = pre.next,
        then = start.next;

    for (let i = 0; i < n - m; i++) {

        start.next = then.next;
        then.next = pre.next;
        pre.next = then;

        then = start.next;
    }

    return dummyHead.next;

};