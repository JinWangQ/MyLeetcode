/**
 * @param {string} s
 * @return {number}
 */
/**
 * We consider using DP to solve this problem since the length we need equals to 2(the last pair of "()" when it exists) + valid longest length before the last pair. 
 * DP[i] represents the longest length end at s.charAt(i), so DP[i] = 0 when s.charAt(i) = '(' which is not an end.
 * for s= "()()(())" DP = [0,2,0,4,0,0,2,8]
 * 
 * When s.charAt(i) = ')' we consider if one char before is '('
 *  if so, DP[i] = 2 + DP[i-2](when i >2)
 *  if not, that is again a ')' before current ')', we check the char at the position way bcak to i-DP[i-1]-1, for example , for s = "(()())" when i = 5, we check if char at 5 - DP[5-1] - 1 = 0 matches with s.charAt(5) to a valid pair.
 */
var longestValidParentheses = function(s) {
    let n = s.length;
    if (n < 2) return 0;
    let dp = new Array(n);
    let max = 0;
    dp.fill(0);

    for (let i = 1; i < n; i++) {
        if (s.charAt(i) == ')') {
            if (s.charAt(i - 1) == '(') {
                dp[i] = 2 + ((i > 1) ? dp[i - 2] : 0);
            } else if (s.charAt(i - dp[i - 1] - 1) == '(') {
                dp[i] = 2 + dp[i - 1] + ((i - dp[i - 1] - 2 >= 0) ? dp[i - dp[i - 1] - 2] : 0);
            }
            max = Math.max(max, dp[i]);
        }
    }
    return max;
};