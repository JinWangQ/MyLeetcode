/**
 * @param {string} s
 * @return {string}
 */

// var reverseString = function(s) {
//     return s.split("").reverse().join("");
// };
// 
// two pointers, better performance
const reverseString = s => {
    let arr = s.split("");
    let min = 0,
        max = arr.length - 1;
    while (min < max) {
        let temp = arr[max];
        arr[max] = arr[min];
        arr[min] = temp;
        min++;
        max--;
    }
    return arr.join("");
}