/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let num = 0;
    let sign = "+";
    for (let i = 0; i < s.length; i++) {
        if ('0123456789'.indexOf(s.charAt(i)) !== -1) {
            num = s.charAt(i) - "0" + num * 10;
        }
        if ('0123456789'.indexOf(s.charAt(i)) == -1 && s.charAt(i) !== " " || i == s.length - 1) {
            if (sign == "+") stack.push(num);
            if (sign == "-") stack.push(-num);
            if (sign == "*") stack.push(stack.pop() * num);
            //have to check if previous push was a nagative number
            //e.g 14 - 3 / 2
            // Math.floor(-3/2) = -2 but we want -Math.floor(3/2)
            // can also be acheived by Math.trunc(x), which return the integer part
            if (sign == "/") {
                let temp = stack.pop();
                if (temp < 0)
                    stack.push(-Math.floor(Math.abs(temp) / num));
                else
                    stack.push(Math.floor(temp / num));
            }
            num = 0;
            sign = s.charAt(i);
        }
    }
    let res = 0;
    for (val of stack) {
        res += val;
    }
    return res;
};