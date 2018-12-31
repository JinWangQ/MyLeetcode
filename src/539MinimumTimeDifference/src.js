/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let mark = new Array(24 * 60);
    mark.fill(false);

    for (time of timePoints) {
        let h = Number(time.split(":")[0]),
            m = Number(time.split(":")[1]);
        if (mark[h * 60 + m]) return 0; // when this mark is visited, it means there are two same time.
        mark[h * 60 + m] = true;
    }

    let first = Number.MAX_SAFE_INTEGER,
        last = Number.MIN_SAFE_INTEGER;
    let prev = 0,
        min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < 24 * 60; i++) {
        if (mark[i]) {
            if (first != Number.MAX_SAFE_INTEGER) {
                min = Math.min(min, i - prev);
            }
            first = Math.min(first, i);
            last = Math.max(last, i);
            prev = i;
        }
    }
    return Math.min(min, (24 * 60 - last + first))
};