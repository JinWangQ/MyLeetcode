// it's like the problem to find where the cycle begins
const findDuplicate = nums => {
	let slow = nums[0],
		fast = nums[nums[0]];
	while (slow != fast) {
		slow = nums[slow];
		fast = nums[nums[fast]];
	}

	fast = 0;
	while (slow != fast) {
		fast = nums[fast];
		slow = nums[slow];
	}
	return slow;
}