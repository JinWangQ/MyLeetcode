/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// the last bit of the & of two adjacent number is 0
// move 1 bit for both m and n until they become the same number
// use m * move times.
var rangeBitwiseAnd = function(m, n) {
	if (m === 0) return 0;
	let count = 1;
	while (m !== n) {
		m >>= 1;
		n >>= 1;
		count <<= 1;
	}
	return m * count;
};