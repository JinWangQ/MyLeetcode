/**
 * @param {string} s
 * @return {string[]}
 *
 * three-layer for loop cut the string to format-valid IP address,
 * then check if all parts satisfy [0, 255] 
 *
 * every part should have at least one digit 
 */
var restoreIpAddresses = function(s) {
    let n = s.length;
    let res = []

    for (let i = 1; i < 4 && i < n - 2; i++)
        for (let j = i + 1; j < i + 4 && j < n - 1; j++)
            for (let k = j + 1; k < j + 4 && k < n; k++) {
                let s1 = s.slice(0, i),
                    s2 = s.slice(i, j),
                    s3 = s.slice(j, k),
                    s4 = s.slice(k, n);
                if (isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)) {
                    let validIP = s1 + "." + s2 + "." + s3 + "." + s4;
                    res.push(validIP);
                }

            }
    return res;

};

var isValid = function(s) {
    if (s.length > 3 || s.length === 0 || (s.charAt(0) === "0" && s.length > 1) || Number.parseInt(s) > 255)
        return false;
    return true;
};