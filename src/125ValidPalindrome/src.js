/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	let n = s.length;
	if (n === 0) return true;

	s = s.replace(/[^\w\s]|_/g, "").split(" ").join("").toLowerCase();
	n = s.length;

	for (let i = 0; i < Math.floor(n / 2); i++) {
		if (s[i] != s[n - i - 1])
			return false;
	}

	return true;
};