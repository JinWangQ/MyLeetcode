/**
 * @param {number} num
 * @return {string[]}
 */
/**
 * go though each time and check if it's digits equals to the given number
 * push the time into result when match.
 */
var readBinaryWatch = function (num) {
    let times = [];
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            let time = (h * 64 + m) == 0 ? 0 : (h * 64 + m).toString(2).match(/1/g).length;
            if (time === num) {
                if (m < 10) m = "0" + m;
                times.push(h + ":" + m)
            }
        }
    }
    return times;
};