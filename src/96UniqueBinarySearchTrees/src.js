/**
 * @param {number} n
 * @return {number}
 *
 * G(n)    -> the number of unique BSTs for sequence length of n
 * F(i, n) -> the number of unique BSTs when root is i, 1 <= i <=n, out of sequence length of n	
 * 
 * F(i, n) = (left subtree) x (right subtree)
 * 		   = G(i-1)         x G(n-1)
 * e.g
 * F(3, 7) = {1, 2}         x {4, 5, 6, 7}
 * 		   = G(2)           x G(4)
 *
 * G(n)    = F(1, n) + ... + F(n, n)
 * 		   = G(0) x G(n-1) + G(1) x G(n-1) + ... + G(n-1) x G(0)
 * 		   
 *
 * 
 */
var numTrees = function(n) {
	let F = new Array(n + 1);
	F.fill(0);
	F[0] = 1;
	F[1] = 1;

	for (let i = 2; i <= n; ++i)
		for (let j = 1; j <= i; ++j) {
			F[i] += F[j - 1] * F[i - j];
		}

	return F[n];
};