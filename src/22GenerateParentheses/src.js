/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];
    if (n === 0) return result.push("");
    backtrack(result, "", 0, 0, n);
    return result;
};

var backtrack = function(rsl, str, left, right, n) {

    //the length of any element in result equals to n*2 
    if (str.length == n * 2) {
        rsl.push(str);
        return;
    }
    //every "(" will follow ")", 
    //but there is one recursive call after each "(" and ")"
    //than we get all combinations 
    if (left < n) {
        backtrack(rsl, str + "(", left + 1, right, n);
    }

    if (right < left) {
        backtrack(rsl, str + ")", left, right + 1, n);
    }
};