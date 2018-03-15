/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let hLength = haystack.length,
        nLength = needle.length;
    //for case like ("", "")
    if (nLength == 0 || haystack == needle) return 0;
    if (hLength < nLength) return -1;
    //hLength - nLength!
    for (let i = 0; i <= hLength - nLength; i++) {
        for (let j = 0; j < nLength && haystack[i + j] == needle[j]; j++) {
            if (j == nLength - 1)
                return i;
        }
    }
    return -1;
};