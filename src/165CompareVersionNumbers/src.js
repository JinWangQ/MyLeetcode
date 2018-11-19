/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split(".").map(x => {
        return Number(x)
    });
    let v2 = version2.split(".").map(x => {
        return Number(x)
    });

    let length = Math.max(v1.length, v2.length);
    let i = 0;
    while (i < length) {
        if (v1[i] === undefined && v2[i] !== 0) return -1;
        if (v2[i] === undefined && v1[i] !== 0) return 1;

        if (v1[i] < v2[i]) return -1;
        if (v1[i] > v2[i]) return 1;
        i++;
    }
    return 0;
};