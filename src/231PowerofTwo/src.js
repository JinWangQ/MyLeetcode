/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
	if (n < 0) return false;
	let bi = (n >>> 0).toString(2);
	let bi_a = [...bi];
	if (bi_a[0] == '1') {
		bi_a.shift();
		return bi_a.every(x => x == '0')
	}
	return false;
};