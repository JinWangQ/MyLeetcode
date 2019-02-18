/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    for (let i = 0; i < t.length; i++) {
        if (!s.includes(t[i])) return t[i];
        else {
            let j = s.indexOf(t[i]);
            s = j > 0 ? s.slice(0, j) + s.slice(j + 1) : s.slice(1);
        }
    }
    return null;
};