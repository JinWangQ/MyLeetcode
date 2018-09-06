/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 *
 * where there is a ListNode, there is a dummyHead.
 * 
 */
var partition = function(head, x) {
    let dummy1 = new ListNode(0),
        dummy2 = new ListNode(0);
    let left = dummy1,
        right = dummy2;
    while (head != null) {
        if (head.val < x) {
            left.next = head;
            left = head;
        } else {
            right.next = head;
            right = head;
        }
        head = head.next;
    }

    right.next = null;
    left.next = dummy2.next;

    return dummy1.next;

};