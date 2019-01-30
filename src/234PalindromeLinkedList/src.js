/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    let n = arr.length;
    let i = 0;
    while(i < ~~(n/2)){
        if(arr[i] != arr[n-i-1]){
            return false;
        }
        i++
    }
    return true;
};