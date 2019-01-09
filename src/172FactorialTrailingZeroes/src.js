/**
 * @param {number} n
 * @return {number}
 */
// the trailing 0s come from 2*5, 2 is ample, so we count how many 5 as a factor are there for number 1 - n
//e.g 8! from 1~8, only one 5(5); 20! from 1~20, 5, 10(5), 15(5), 20(5) total 4
// 25! 1~25, 5, 10(5), 15(5), 20(5), 25(5,5), total 6
var trailingZeroes = function(n) {
	return n === 0 ? 0 : ~~(n / 5) + trailingZeroes(~~(n / 5));
};