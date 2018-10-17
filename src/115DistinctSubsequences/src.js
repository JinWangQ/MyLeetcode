/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// 2d array
// var numDistinct = function(s, t) {
//     if(t.length > s.length) return 0;

//     let dp = [];
//     for(let i = 0; i <= t.length+1; i++){
//         dp[i] = new Array(s.length+1);
//         dp[i].fill(0)
//     }
//     dp[0].fill(1);

//     for(let i = 0; i < t.length; i++)
//         for(let j = 0; j < s.length; j++){
//             if(t.charAt(i) == s.charAt(j)) {
//                 dp[i+1][j+1] = dp[i][j] + dp[i+1][j];
//             } else {
//                 dp[i+1][j+1] = dp[i+1][j];
//             }
//         }

//     return dp[t.length][s.length];

// };
// 1d array
var numDistinct = (s, t) => {
	if (t.length > s.length) return 0;

	const dp = Array(t.length).fill(0);
	s.split("").forEach(e => {
		for (let i = t.length - 1; i >= 0; i--)
			if (e === t.charAt(i))
				dp[i] += (i >= 1 ? dp[i - 1] : 1);
	});

	return dp[t.length - 1];
};