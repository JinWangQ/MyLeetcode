/**
 * @param {string} s
 * @return {string[][]}
 */

//this problem can be solved by checking if a substring is Palindrome
//and then backtacking

var partition = function(s) {
    let res = [];
    let n = s.length;
    if (n === 0) return res;
    backtrack(res, [], s, 0, n);
    return res;
};

const backtrack = (res, temp, s, l, r) => {
    if (l === r) {
        res.push(temp.concat([]));
        return;
    }

    for (let i = l + 1; i <= r; i++) {
        if (isP(s, l, i)) {
            temp.push(s.substring(l, i));
            backtrack(res, temp, s, i, r);
            temp.pop();
        }
    }
};

const isP = (s, l, r) => {
    if (l === r - 1) return true;
    while (l < r - 1) {
        if (s.charAt(l) != s.charAt(r - 1)) return false;
        l++;
        r--;
    }
    return true;
};