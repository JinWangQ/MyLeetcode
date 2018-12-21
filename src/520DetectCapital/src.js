/**
 * @param {string} word
 * @return {boolean}
 */
// The 1st letter is non capital
// 		if every letter is non cap
// The 1st letter is capital
// 		if every letter is cap
// 		if all the letter except the 1st are non cap
const detectCapitalUse = word => {
	let wordArr = [...word];
	if (word.charCodeAt(0) > 96 && word.charCodeAt(0) < 123) {
		if (wordArr.every(letter => letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123))
			return true;
		return false;
	} else {
		if (wordArr.every(letter => letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91))
			return true;
		let temp = wordArr.slice(1);
		if (temp.every(letter => letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123))
			return true;
		return false;
	}
}