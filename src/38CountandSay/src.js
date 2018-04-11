/**
 * @param {number} n
 * @return {string}
 *
 * n=0 1
 * n=1 11(read the number when n = 0)
 * n=2 21(read the number when n = 1)
 * n=3 1211
 * ...
 * ...
 * result = result + count + say
 * 
 */
var countAndSay = function(n) {
	let result = '1';
	for (let outer = 1; outer < n; outer++) {
		let previous = result;
		result = "";
		let count = 1;
		let say = previous.charAt(0);

		for (let i = 1; i < previous.length; i++) {
			if (previous.charAt(i) != say) {
				result = result + count + say;
				count = 1;
				say = previous.charAt(i);
			} else count++;
		}
		result = result + count + say;
	}
	return result;
};