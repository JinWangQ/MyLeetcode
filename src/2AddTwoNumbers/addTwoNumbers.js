/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var dummyHead = new ListNode(0);
    var p = l1, q = l2, curr = dummyHead, carry = 0, sum = 0;
    //use "while" when the length is unknow
    while( p !== null || q !== null) {
        if ( p !== null ){
            sum = sum + p.val;
            p = p.next;
        }
        if ( q !== null) {
            sum = sum +q.val;
            q = q.next;
        }
        sum = sum + carry;
        if ( sum >= 10 ) { 
            carry = 1;
            sum = sum % 10;
            curr.next = new ListNode(sum);
        } else {
            curr.next = new ListNode(sum);
            carry = 0;//reset carry when sum less than 10
        }
        sum = 0;//reset the sum because it will return to the loop
        curr = curr.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(1);
    }
    return dummyHead.next;
};