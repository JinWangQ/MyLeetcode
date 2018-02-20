/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	//nagetive numbers and numbers which can be divided by 10
	//are obviously not Palindrome
	if (x < 0 || (x != 0 && x % 10 == 0))
		return false;

	let rev = 0;
	//get the second half of the integer, then compare it to the first half
	//to see if they are the same
	while (x > rev) {
		rev = rev * 10 + x % 10;
		x = Math.floor(x / 10);
	}

	return (rev == x || Math.floor(rev / 10) == x) ? true : false;

};