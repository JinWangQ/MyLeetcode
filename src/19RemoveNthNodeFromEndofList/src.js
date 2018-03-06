/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let first = dummyHead,
        second = dummyHead;
    //let the number pf nodes between two pointers(first and second) to be n
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    //than we are good to change the pointer
    second.next = second.next.next;
    return dummyHead.next;

};