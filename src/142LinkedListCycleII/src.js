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
 */
var detectCycle = function(head) {
    if (head === null || head.next === null) return null;

    let firstP = head,
        secondP = head;

    while (firstP && secondP && secondP.next) {
        firstP = firstP.next;
        secondP = secondP.next.next;
        if (firstP == secondP) {
            firstP = head;
            while (firstP != secondP) {
                firstP = firstP.next;
                secondP = secondP.next;
            }
            return firstP
        }
    }

    return null;
};