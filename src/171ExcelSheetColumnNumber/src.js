const titleToNumber = s => {
	let sum = 0;
	for (let i = 0; i < s.length; i++) {
		sum = sum * 26 + (s[i].charCodeAt() - 'A'.charCodeAt() + 1);
	}
	return sum;
}