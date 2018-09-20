/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 *
 * e.g
 * s1 = "aabcc"
 * s2 = "dbbca"
 * s3 = 'aadbbcbcac'
 * what does the matrix do :
 *   a a b c c
 * d - -
 * b   |
 * b   |
 * c   | - -
 * a       | -
 */
var isInterleave = function(s1, s2, s3) {
    let n1 = s1.length,
        n2 = s2.length,
        n3 = s3.length;

    if ((n1 + n2) != n3) return false;

    let matrix = [];
    matrix.length = n2 + 1;
    for (let i = 0; i < matrix.length; i++)
        matrix[i] = new Array(n1 + 1);
    matrix[0][0] = true;

    for (let i = 1; i < matrix[0].length; i++)
        matrix[0][i] = matrix[0][i - 1] && (s1.charAt(i - 1) == s3.charAt(i - 1));

    for (let i = 1; i < matrix.length; i++)
        matrix[i][0] = matrix[i - 1][0] && (s2.charAt(i - 1) == s3.charAt(i - 1));

    for (let i = 1; i < matrix.length; i++)
        for (let j = 1; j < matrix[0].length; j++)
            matrix[i][j] = matrix[i - 1][j] && (s2.charAt(i - 1) == s3.charAt(i + j - 1)) || matrix[i][j - 1] && (s1.charAt(j - 1) == s3.charAt(i + j - 1));

    return matrix[n2][n1];

};