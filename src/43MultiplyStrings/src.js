/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * `num1[i] * num2[j]` will be placed at indices `pos[i + j`, `i + j + 1]` 
 * pos[]will store the result
 */
var multiply = function(num1, num2) {
    let m = num1.length,
        n = num2.length;
    let pos = [];
    for (let i = 0; i < m + n; i++)
        pos[i] = 0;

    for (let i = m - 1; i >= 0; i--)
        for (let j = n - 1; j >= 0; j--) {
            let mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
            let p1 = i + j,
                p2 = i + j + 1;
            let sum = mul + pos[p2];

            pos[p1] += Math.floor(sum / 10); // carry
            pos[p2] = sum % 10; // mod
        }

    let sb = "";
    for (let p in pos)
        if (!(sb.length == 0 && pos[p] == 0)) sb += pos[p];
    return sb.length == 0 ? "0" : sb;
};