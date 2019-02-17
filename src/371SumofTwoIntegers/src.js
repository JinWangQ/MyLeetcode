/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// a, b are 1 bit integer, the combinations are (1,1) (1,0) (0,1) (0,0)
// the sum is 10((a&b)<<1 + a^b), 1(a^b), 1(a^b), 0(a^b)
// newB is going to be 0
var getSum = function (a, b) {
    if (a === 0) return b;
    if (b === 0) return a;
    while (b) {
        let newA = a ^ b;
        let newB = (a & b) << 1;
        a = newA;
        b = newB;
    }
    return a;
};