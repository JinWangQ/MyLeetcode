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
var swapPairs = function(head) {
    var dummyHead = new ListNode(0);
    dummyHead.next = head;
    //pointer
    var current = dummyHead;

    //make sure they are both non-null
    //current is always pointed to the previous of pairs
    while (current.next != null && current.next.next != null) {
        var t = new ListNode(0),
            s = new ListNode(0);
        t = current.next;
        s = current.next.next;
        t.next = s.next;
        current.next = s;
        current.next.next = t;
        current = current.next.next;
    }
    return dummyHead.next;

};