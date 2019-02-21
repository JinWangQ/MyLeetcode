/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {

    if (num === 0) return "0";
    let res = "";
    if (num > 0) {
        let dic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
        if (num < 16) return dic[num] + "";
        let left = ~~(num / 16);
        let right = num % 16;

        let stack = [];
        while (left >= 16) {
            stack.push(left % 16);
            left = ~~(left / 16);
        }

        while (stack.length > 0) {
            res += dic[stack.pop()];
        }

        res = dic[left] + res + dic[right];
    } else {
        // nagative numbers is another form of positive number
        res = toHex(0xffffffff - Math.abs(num) + 1);
    }

    return res;
};