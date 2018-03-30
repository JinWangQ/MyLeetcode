// ------------------------------
// Time Limit Exceed
// ------------------------------
// /**
//  * @param {string} s
//  * @param {string[]} words
//  * @return {number[]}
//  */
// var findSubstring = function(s, words) {
//     let res = [];

//     let wlen = words[0].length;// words length are the same
//     let len = words.length * wlen; // the length of concat substring

//     for (let i = 0; i < s.length; i++) {
//         let sub = s.substring(i, i + wlen)
//         //make sure the word is in the string
//         //make sure the concat substring is in the string
//         if (s.indexOf(sub) != -1 && findIndices(s, words, len, wlen, i))
//             res.push(i);
//     }
//     return res;
// };

// var findIndices = function(s, words, len, wlen, i) {
//     if (i + wlen > s.length) 
//         return false;
//     let map = new Map();
//     for (word of words) {
//         if (map.has(word)) {
//             map.set(word, map.get(word) + 1);
//         } else {
//             map.set(word, 1);
//         }
//     }
//     let sub = s.substring(i, i + len);
//     //check the substring, length of words.length * words[0].length, is it a concatation of words
//     for (let i = 0; i < len; i += wlen) {
//         let chunk = sub.substring(i, i + wlen);
//         if (map.has(chunk) && map.get(chunk) >= 1)
//             map.set(chunk, map.get(chunk) - 1)
//         else
//             return false;
//     }
//     return true;
// };
// ----------
//   Accept
// ----------
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let need = new Map();
    for (word of words) {
        if (need.has(word)) {
            need.set(word, need.get(word) + 1);
        } else {
            need.set(word, 1);
        }
    }
    let n = s.length,
        num = words.length,
        len = words[0].length,
        ans = [];
    for (let i = 0; i < len; i++) {
        let l = i,
            count = 0;
        let seen = new Map();
        for (let j = i; j <= n - len; j += len) {
            let word = s.substring(j, j + len);
            if (need.has(word)) {
                let value = seen.has(word) ? seen.get(word) : 0;
                seen.set(word, value + 1);
                if (seen.get(word) <= need.get(word)) {
                    count++;
                } else {
                    while (seen.get(word) > need.get(word)) {
                        let first = s.substring(l, l += len);
                        if (seen.has(first)) {
                            seen.set(first, seen.get(first) - 1);
                        } else {
                            seen.set(first, -1);
                        }
                        let value = need.has(first) ? need.get(first) : 0
                        if (seen.get(first) < value) {
                            count--;
                        }

                    }
                }
                if (count == num) {
                    ans.push(l);
                    count--;
                    first = s.substring(l, l += len);
                    seen.set(first, seen.get(first) - 1);
                }
            } else {
                seen.clear();
                count = 0;
                l = j + len;
            }
        }
    }
    return ans;
};