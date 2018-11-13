/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
/**
 * Whether a string can be segmented to words which include in Dict ?
 * we consider using DP, if last segmented word is from Dict and previous words are,
 * then running this string should return true
 */
var wordBreak = function(s, wordDict) {
    let n = s.length;
    if (n < 2) return wordDict.includes(s);

    let DP = new Array(n + 1);
    DP.fill(false);
    DP[0] = true;
    for (let i = 1; i <= n; i++)
        for (let j = 0; j < i; j++) {
            if (DP[j] && wordDict.includes(s.substring(j, i))) {
                DP[i] = true;
                break;
            }
        }
    return DP[n];
};