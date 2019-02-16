/**
 * @param {number} num
 * @return {boolean}
 */
// a square is 1 + 3 + 5 + 7 + 9 + ... 
var isPerfectSquare = function (num) {
    i = 1;
    while (num > 0) {
        num -= i;
        i += 2;
    }
    return num == 0;
};