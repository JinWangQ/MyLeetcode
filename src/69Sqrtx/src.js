/**
 * @param {number} x
 * @return {number}
 * binary search
 * or you can just use return Math.floor(Math.sqrt(x));
 */
var mySqrt = function(x) {
    if (x <= 1)
        return x;
    let left = 0,
        right = Math.floor(x / 2);
    while (1) {
        let mid = Math.floor((left + right) / 2);
        if (mid > 0 && mid > x / mid)
            right = mid - 1;
        else if (mid + 1 > x / (mid + 1))
            return mid;
        else left = mid + 1;
    }

};