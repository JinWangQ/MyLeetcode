/**
 * @param {string} s
 * @return {string}
 * palindrome mirrors around its center
 */
var longestPalindrome = function(s) {
    //palindrome mirro it self from the center
    //from center to the left and right side to get the length of the palindrome
    if (s === null || s.length === 0) return "";
	let n = s.length;
	let start = 0,
		end = 0;
	for (let mid = 0; mid < n; mid++) {
		let len1 = expFromCenter(s, mid, mid),
			len2 = expFromCenter(s, mid, mid + 1);
		let len = Math.max(len1, len2);
		if (len > end - start) {
			start = mid - Math.floor((len - 1) / 2);
			end = mid + Math.floor(len / 2)
		}
	}
	return s.substring(start, end + 1);
};

var expFromCenter = (s, l, r) => {
    while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
		l--;
		r++;
	}
	return r - l - 1;
};

// This brute force solution is not working because time limit exceeded
// 
//
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function(s) {
//     let n = s.length;
//     let pad = "",
//         anspad = "";
//     let j = 0,
//         sym = 0;
//     while (j < n) {
//         if (!pad.includes(s[j])) {
//             if (anspad.length <= 0) {
//                 anspad = s.charAt(j);
//             }
//             pad += s[j];
//             sym = j;
//             j++;
//         } else {
//             let cur = j - 2 * sym;
//             if ((s[j] == s[cur]) && (cur !== j)) {
//                 pad += s[j];
//                 anspad = s.substr((j - 2 * sym), j);
//                 j++;
//             } else {
//                 if (anspad.length <= 2) {
//                     anspad = s.substr(sym, 2);
//                     pad = anspad;
//                 } else {
//                     pad = "";
//                     pad = s[j++];
//                 }

//             }
//         }
//     }
//     return anspad;
// };
