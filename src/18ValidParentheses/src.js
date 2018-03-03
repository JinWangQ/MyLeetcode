/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 == 1)
        return false;
    if (s[0] == ")" || s[0] == "]" || s[0] == "}" || s[s.length - 1] == "(" || s[s.length - 1] == "{" || s[s.length - 1] == "[")
        return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(")
            stack.push(")");
        else if (s[i] == "{")
            stack.push("}");
        else if (s[i] == "[")
            stack.push("]");
        else if (stack.length == 0 || stack.pop() != s[i])
            return false;
    }
    return stack.length == 0 ? true : false;
};