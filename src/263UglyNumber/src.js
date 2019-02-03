/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    for(let p of [2,3,5]){
        while(num && num % p === 0){
            num /= p;
        }
    }
    return num === 1;
};