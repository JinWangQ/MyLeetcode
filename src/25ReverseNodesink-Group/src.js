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
 * 
 */
/* one itertion in for loop (k=3)
 *while in for loop, 
 *the element where 'nex' pointer pointed will be 'drag' to the head
 *then make it reversed
-1 -> 1 -> 2 -> 3 -> 4 -> 5
 |    |    |     
pre  cur  nex  

-1 -> 2 -> 1 -> 3 -> 4 -> 5
 |         |    |     
pre       cur  nex  

-1 -> 3 -> 2 -> 1 -> 4 -> 5
 |              |    |     
pre            cur  nex  
*/
var reverseKGroup = function(head, k) {
    if (head == null || k == 1)
        return head;

    var dummy = new ListNode(-1);
    dummy.next = head;
    var cur = dummy,
        pre = dummy;
    var nex = new ListNode();
    var num = 0;
    while (cur = cur.next)
        num++;
    while (num >= k) {
        cur = pre.next;
        nex = cur.next;
        for (let i = 1; i < k; ++i) {
            cur.next = nex.next;
            nex.next = pre.next;
            pre.next = nex;
            nex = cur.next;
        }
        pre = cur;
        num = num - k;
    }
    return dummy.next;
};