/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
	//numObj.toString([radix])
	return n.toString(2).split("0").join("").length;
};