const summaryRanges = nums => {
	let res = [],
		start = 0,
		end = 0;
	for (let i = 0; i < nums.length; i++) {
		if (i === nums.length - 1 && start === end) {
			res.push(nums[i].toString());
			break;
		}
		if (nums[i] + 1 === nums[i + 1]) end = i + 1;
		else {
			if (start === end) res.push(nums[start].toString());
			else {
				let range = nums[start] + "->" + nums[end];
				res.push(range);
			}
			start = end + 1;
			end = i + 1;
		}
	}
	return res;
}