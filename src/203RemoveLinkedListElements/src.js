/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function(head, val) {
//     let dummyHead = new ListNode(-1);
//     dummyHead.next = head;
//     let pre = dummyHead,
//         cur = head;
    
//     while(cur != null){
//         if(cur.val == val){
//             pre.next = cur.next
//         }else{
//             pre = pre.next;
//         }
//         cur = cur.next;
//     }
//     return dummyHead.next;
// };
var removeElements = function(head, val) {
    if(head == null) return null;
    head.next = removeElements(head.next, val);
    return head.val == val ? head.next : head;
}