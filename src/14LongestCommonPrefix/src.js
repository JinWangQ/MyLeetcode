/**
 * @param {string[]} strs
 * @return {string}
 * use the first element to check if it is the prefix of the rest elements
 * when it is not(that is strs[i].indexOf(result) != 0)
 * cut the last character and keep compare
 */
var longestCommonPrefix = function(strs) {
	let result = "";
	if (strs == null || strs.length == 0)
		return result;
	result = strs[0];
	for (let i = 1; i < strs.length; i++) {
		while (strs[i].indexOf(result) != 0) {
			result = result.substring(0, result.length - 1);
			if (result.length == 0) return "";
		}
	}


	return result;

};