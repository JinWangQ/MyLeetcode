/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// get factorial of num
var fac = (num) => {
    if (num > 0) return num * fac(num - 1);
    else if (num === 0) return 1;
    else return -1;
};
// get combination C(n, k)
var com = (n, k) => {
    return fac(n) / (fac(k) * fac(n - k));
};

var getRow = function(rowIndex) {
    let row = new Array(rowIndex + 1);
    row[0] = row[row.length - 1] = 1;
    if (rowIndex > 1) {
        for (let i = 1; i <= Math.floor(row.length / 2); i++) {
            row[i] = row[row.length - i - 1] = com(rowIndex, i);
        }
    }

    return row;
};