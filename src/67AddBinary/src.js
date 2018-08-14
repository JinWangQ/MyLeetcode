/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = "";
    let i = a.length - 1,
        j = b.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0) {

        let sum = carry;
        if (i >= 0) sum += a.charAt(i--) - '0';
        if (j >= 0) sum += b.charAt(j--) - '0';
        res = sum % 2 + res;
        carry = Math.floor(sum / 2);
    }
    if (carry != 0)
        res = carry + res;
    return res;
};