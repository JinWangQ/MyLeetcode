/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	let result = 0;
	//from the tail to the head
	//for 'I' 'X' 'C', when result > 5 | 50 | 500 
	//that means those digits appear to the left of a large digit
	//so there should be minus for calculation 
	for (let i = s.length - 1; i >= 0; i--) {
		switch (s[i]) {
			case "I":
				result += (result >= 5) ? -1 : 1;
				break;
			case "V":
				result += 5;
				break;
			case "X":
				result += 10 * (result >= 50 ? -1 : 1);
				break;
			case "L":
				result += 50;
				break;
			case "C":
				result += 100 * (result >= 500 ? -1 : 1);
				break;
			case "D":
				result += 500;
				break;
			case "M":
				result += 1000;
				break;

		}
	}
	return result;

};