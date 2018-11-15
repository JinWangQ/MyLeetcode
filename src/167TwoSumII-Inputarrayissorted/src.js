/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//364ms 
// var twoSum = function(numbers, target) {
//     let res = [0, 0];
//     for(let i = 0; i < numbers.length - 1; i++){
//         for(let j = i + 1; j < numbers.length; j++){
//             if(numbers[i] + numbers[j] === target){
//                 res[0] = i + 1;
//                 res[1] = j + 1;
//             }
//         }
//     }
//     return res;
// };
// 56ms this solution made think of the story of Gauss...
const twoSum = (numbers, target) => {
    let min = 0,
        max = numbers.length - 1;
    while (min < max) {
        let current = numbers[min] + numbers[max];
        if (current === target)
            return [min + 1, max + 1];
        else if (current < target)
            min++;
        else
            max--;
    }
    return [-1, -1];
};