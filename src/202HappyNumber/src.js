/**
 * @param {number} n
 * @return {boolean}
 */
// Floyd Cycle Detection Algorithm
// slow excute once and fast excute twice
// see if they get the same result
var isHappy = function(n) {
    let slow, fast;
    slow = fast = n;
    do{
        slow = digitSquareSum(slow);
        fast = digitSquareSum(fast);
        fast = digitSquareSum(fast);
    }while(slow != fast);
    if(slow === 1) return true;
    return false;
        
};

var digitSquareSum = function(n) {
    let sum = 0;
    while(n){
        let digit = n % 10;
        sum += digit * digit;
        n = ~~(n/10);
    }
    return sum;
};
// var isHappy = function(n){
//     while(n > 6){
//         let next = 0;
//         while(n){
//             next += (n % 10) * (n % 10);
//             n = ~~(n/10);
//         }
//         n = next;
//     }
//     return n==1;
// }