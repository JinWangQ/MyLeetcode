/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	s = s.replace(/(\s*$)/g, ""); // replace whitespaces at ending position
	let slength = s.length;
	let sindex = s.lastIndexOf(" "); //find last whitespace
	//calculate length of last word
	if (sindex == -1 && s.length == 0)
		return 0;
	if (sindex == -1 && s.length != 0)
		return slength;
	return s.length - sindex - 1;

};