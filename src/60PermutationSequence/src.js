/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * e.g n = 4 
 * there are 4*(4-1)! permutations, each has 6 :
 *     1 + {2, 3, 4} 
 *     2 + {1, 3, 4}
 *     3 + {1, 2, 4}
 *     4 + {1, 2, 3}
 * numSet = [1, 2, 3, 4]
 * k-- because everything starts from 0
 * 1st = numSet[k / (n-1)!]
 *  k = k % (n-1)!
 *  remove this numbet from numsSet
 * 2nd = numSet[k / (n-2)!]
 * ...
 * ...   
 * 
 */
var getPermutation = function(n, k) {
    let res = [];


    //store all the factorial
    //[1, 1, 2, 6, 24, ..., (n-1)!]
    let fac = [1],
        sum = 1;
    for (let i = 1; i < n; i++) {
        sum = sum * i;
        fac.push(sum);
    }

    //numSet[1, 2, 3, ..., n]
    let numSet = [];
    for (let i = 1; i <= n; i++) {
        numSet.push(i);
    }

    k--;
    let index = 0;
    for (let i = 1; i <= n; i++) {
        index = Math.floor(k / fac[n - i]);
        res.push(numSet[index]);
        numSet.splice(index, 1);
        k = k % fac[n - i];
    }

    return res.join("");

};