/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
	let seg = s.split(" ");
	let count = 0
	for (let i = 0; i < seg.length; i++) {
		if (seg[i] != "") count++;
	}
	return count;
};