/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
	let ranArr = [...ransomNote];
	let oldMagLen = magazine.length;

	ranArr.forEach(item => {
		magazine = magazine.replace(item, "");
	})

	if (oldMagLen == (magazine.length + ranArr.length))
		return true;
	else
		return false;
};