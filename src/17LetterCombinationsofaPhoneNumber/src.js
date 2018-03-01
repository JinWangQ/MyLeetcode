/**
 * @param {string} digits
 * @return {string[]}
 * recursive method and hash map
 */
var letterCombinations = function(digits, current = "", res = []) {
    if (digits.length === 0 && current == "") {
        return res;
    }
    //means when it has visited all the digits for current i
    if (digits.length < 1) {
        return res.push(current);
    }
    const Numbers = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };
    let curNumberStr = Numbers[digits[0]];
    for (let i = 0; i < curNumberStr.length; i++) {
        let curLetter = curNumberStr[i];
        letterCombinations(digits.slice(1), current + curLetter, res)

    }
    return res;
};