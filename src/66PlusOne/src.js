/**
 * @param {number[]} digits
 * @return {number[]}
 *
 * use for to represent the Plus One
 * When there is no carry return.
 *
 * if every digit in digits is 9, create a new Array
 * 
 */
var plusOne = function(digits) {

    let length = digits.length;

    for (let i = length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    let newNum = [];
    newNum.length = length + 1;
    newNum.fill(0);
    newNum[0] = 1;

    return newNum;

};