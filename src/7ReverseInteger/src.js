/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x1 = Math.abs(x);
    let ans = 0;
    if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)) {
        ans = 0
    } else {
        let a = x1.toString();
        let b = [];
        for (let i = 0, j = a.length - 1; i < a.length && j >= 0; i++) {
            b[i] = a[j];
            j--
        }
        let c = 0;
        let i = 0;
        while (i < b.length) {
            if (b[i] != 0) {
                c = i;
                break;
            } else {
                i++;
            }

        }
        ans = b.slice(c);
        ans = ans.join("");
        ans = ans.toString();
        ans = parseInt(ans, 10);
        if (ans > Math.pow(2, 31) - 1 || ans < -Math.pow(2, 31)) {
            ans = 0;
        } else if (x < 0) {
            ans = -ans;
        }
    }
    return ans;
};