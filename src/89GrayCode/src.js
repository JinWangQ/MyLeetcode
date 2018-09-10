/**
 * @param {number} n
 * @return {number[]}
 * the trick is current i XOR i >> i
 */
var grayCode = function(n) {
	let res = [];
	for (let i = 0; i < 1 << n; i++) res.push(i ^ i >> 1);
	return res;
};