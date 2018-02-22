/**
 * @param {number} num
 * @return {string}
 * 
 * represent every single unit
 */
var intToRoman = function(num) {
	let I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
		X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
		C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
		M = ["", "M", "MM", "MMM"];
	return M[Math.floor(num / 1000)] + C[Math.floor(num / 100) % 10] + X[Math.floor(num / 10) % 10] + I[num % 10];
};