const moveZeroes = nums => {
	if (nums == null || nums.length = 0) return;
	let index = 0;
	for (let num of nums)
		if (num != 0) nums[index++] = num;
	while (index < nums.length)
		nums[index++] = 0;
}