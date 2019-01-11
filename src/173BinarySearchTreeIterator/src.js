let BSTIterator = function(root) {
    this.stack = [];
    this.pushLeft(root);
};

BSTIterator.prototype.pushLeft = function(root) {
    while (root) {
        this.stack.push(root);
        root = root.left;
    }
}

BSTIterator.prototype.next = function() {
    let nextNode = this.stack.pop();
    this.pushLeft(nextNode.right);
    return nextNode.val;
};

BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};