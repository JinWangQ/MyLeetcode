/**
 * @param {string} s
 * @return {string}
 * palindrome mirrors around its center
 */
var longestPalindrome = function(s) {
    let start = 0,
        end = 0;
    //len1, len2 is the length of how long it can expand from center
    //i is the current center
    for (let i = 0; i < s.length; i++) {
        let len1 = expfromcenter(s, i, i);
        let len2 = expfromcenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }
    return s.substring(start, end + 1);
};

var expfromcenter = function(s, l, r) {
    let L = l,
        R = r;
    while (L >= 0 && R <= s.length && s[L] == s[R]) {
        L--;
        R++;
    }
    return R - L - 1;
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