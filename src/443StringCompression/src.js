const compress = chars => {
	if (chars.length <= 1) return 1;
	let length = 0,
		index = 0;
	while (index < chars.length) {
		let count = 0,
			curChar = chars[index];

		while (index < chars.length && chars[index] == curChar) {
			index++;
			count++;
		}

		chars[length++] = curChar;
		if (count != 1) {
			let charArr = [...count + ""];
			for (let c of charArr)
				chars[length++] = c;
		}
	}
	return length;
};