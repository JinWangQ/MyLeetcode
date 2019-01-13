const kthSmallest = (root, k) => {
	let count = 0;
	let stack = [];
	let node = root;

	while (1) {
		if (node) {
			stack.push(node);
			node = node.left;
		} else {
			if (stack.length === 0) break;
			node = stack.pop();
			count++;
			if (count === k) return node.val;
			node = node.right;
		}
	}
}