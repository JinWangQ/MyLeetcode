/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let n = ratings.length;
    let candy = new Array(n);
    candy.fill(1);
    let res = n;
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            let add = candy[i - 1] + 1;
            let add2 = add - candy[i];
            candy[i] = add;
            res += add2;
        }
    }
    for (let i = n - 1; i > 0; i--) {
        if (ratings[i - 1] > ratings[i]) {
            let add = Math.max(candy[i] + 1, candy[i - 1]);
            let add2 = add - candy[i - 1];
            candy[i - 1] = add;
            res += add2;
        }
    }
    return res;
};