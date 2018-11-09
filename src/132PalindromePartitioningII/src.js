/**
 * @param {string} s
 * @return {number}
 */

/**
 * initialized dp[i] stores the maximum cost of cuts at i-th element
 * e.g s = "aaba" 
 * `dp[3] = 3` means:
 * at most 3 cuts to partition s at s.charAt(3), 
 * that is a,a,b,a (regard each comma as a cut)
 *
 * in order to get the minimum cuts for this problem,
 * we would like to minimize dp[n-1] , n is the length of string s
 *
 * so we expand mid to both sides to see if the expansion is a palindrome
 * if so, 
 * dp[end](where we can expand as much as posible) = dp[start-1](previous cuts) + 1(one more cut)
 */
var minCut = function(s) {
	if (s === null || s.length < 2)
		return 0;

	let n = s.length;
	let dp = [];
	for (let i = 0; i < n; i++)
		dp[i] = i;
	for (let mid = 1; mid < n; mid++) {
		//odd length
		for (let start = mid, end = mid; start >= 0 && end < n && s.charAt(start) == s.charAt(end); start--, end++) {
			let cut = (start == 0) ? 0 : dp[start - 1] + 1;
			dp[end] = Math.min(cut, dp[end]);
		}

		//even length
		for (let start = mid - 1, end = mid; start >= 0 && end < n && s.charAt(start) == s.charAt(end); start--, end++) {
			let cut = (start == 0) ? 0 : dp[start - 1] + 1;
			dp[end] = Math.min(cut, dp[end]);
		}
	}
	return dp[n - 1];
};