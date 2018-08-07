/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head == null || head.next == null)
        return head;
    let count = 0;
    let dummyHead = new ListNode(0);
    dummyHead.next = head;

    //calculate the length of the list
    //{number} count
    let first = dummyHead,
        second = dummyHead;
    while (first.next != null) {
        count++;
        first = first.next;
    }

    for (let i = count - k % count; i > 0; i--) {
        second = second.next;
    }

    //rotate
    first.next = dummyHead.next;
    dummyHead.next = second.next;
    second.next = null;

    return dummyHead.next;

};