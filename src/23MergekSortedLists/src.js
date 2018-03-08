/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    //deal with case [] and [[]]
    if (lists == null || lists.length === 0)
        return [];

    //use the function mergeTwoLists from problem #21
    //when merged, delete those 2 used 
    while (lists.length > 1) {
        lists.push(mergeTwoLists(lists[0], lists[1]));
        lists.shift();
        lists.shift();
    }

    return lists[0];

};

var mergeTwoLists = function(l1, l2) {
    //when one of the list is null
    //return the other one
    if (l1 == null || l2 == null) {
        return l1 == null ? l2 : l1;
    }
    let dummyhead = new ListNode(0);
    let curr = dummyhead;
    //compare the same amount of l1 and l2
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    //link the rest list to the merged list
    curr.next = l1 == null ? l2 : l1;
    return dummyhead.next;
};