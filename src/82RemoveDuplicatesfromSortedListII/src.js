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
 * The trick of these type of problem (list) is to define pointers.
 */
var deleteDuplicates = function(head) {
    if (head == null) return head;
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let pre = dummyHead,
        cur = head;

    while (cur != null) {

        while (cur.next != null && cur.val == cur.next.val)
            cur = cur.next;

        if (cur == pre.next) {
            pre = pre.next;
        } else {
            pre.next = cur.next;
        }

        cur = cur.next;
    }

    return dummyHead.next;

};