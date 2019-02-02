/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) return num;
    num += "";
    num = [...num];
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i] -"";
    }
    if(sum < 10) return sum;
    return addDigits(sum);
};