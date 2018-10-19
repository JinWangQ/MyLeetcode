/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */

//non-recursive
// var connect = function(root) {
//     if(!root) return;

//     let pre = root,
//         cur = null;
//     while(pre) {
//         cur = pre;
//         while(cur) {
//             if(cur.left && cur.right) {
//                 cur.left.next = cur.right;
//                 cur.right.next  = leftOrRight(cur.next);
//             }else if(cur.right && !cur.left) {
//                 cur.right.next = leftOrRight(cur.next); 
//             }else if(!cur.right && cur.left){
//                 cur.left.next = leftOrRight(cur.next);
//             } 
//             cur = cur.next;
//         }
//         let temp = null;
//         if(pre.left){
//             temp = pre.left;
//         } else if(pre.right) {
//             temp = pre.right;
//         } else if(pre.next) {
//             temp = pre.next;
//         }
//         pre = temp;
//     }

// };

//recursive
var connect = (root) => {
    if (!root) return;

    if (root.right)
        root.right.next = leftOrRight(root.next);
    if (root.left)
        root.left.next = !root.right ? leftOrRight(root.next) : root.right;

    root.right && connect(root.right);
    root.left && connect(root.left);

};

var leftOrRight = (p) => {
    while (p) {
        if (p.left) {
            return p.left;
        } else if (p.right) {
            return p.right;
        }
        p = p.next;
    }
    return null;
};