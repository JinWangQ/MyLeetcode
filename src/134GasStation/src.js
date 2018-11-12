/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
//beats 19.77% :(
// var canCompleteCircuit = function(gas, cost) {
//     let count = 0;
//     let tank = 0;
//     let n = gas.length;
//     for(let i = 0; i < n; i++){
//         tank = gas[i];
//         let mark = i;
//         let j = i%n;
//         while(count <= n){
//             tank -= cost[j%n];
//             if(tank < 0 )
//                 break;
//             tank += gas[(j+1)%n] 
//             count++;
//             j++
//         }
//         if(count >= n)
//             return mark
//         count = 0;
//     }
//     return -1;
// };
// 2 passes beats 100%
const canCompleteCircuit = (gas, cost) => {
    let total = 0,
        n = gas.length;
    //check if there is a solution
    for (let i = 0; i < n; i++)
        total = total + gas[i] - cost[i];
    if (total < 0)
        return -1;

    //check the start position of our solution
    let tank = 0,
        start = 0;
    for (let i = 0; i < n; i++) {
        tank = tank + gas[i] - cost[i];
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    return start;

};