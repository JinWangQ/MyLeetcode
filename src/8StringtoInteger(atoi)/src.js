/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let i = 0;
    let sign = 1,
        result = 0;
    let MAX_VAL = Math.pow(2, 31) - 1,
        MIN_VAL = -Math.pow(2, 31);

    //discard leading whitespaces
    while (str[i] == ' ')
        i++;

    //get the sign
    if (str[i] == '+' || str[i] == '-')
        sign = 1 - 2 * (str[i++] == '-');

    //if there there is other characters other than numbers, return 0
    while (str[i] >= '0' && str[i] <= '9') {
        result = result * 10 + (str[i++] - '0');
        if (result > MAX_VAL)
            return sign == 1 ? MAX_VAL : MIN_VAL;
    }

    return sign * result;

};