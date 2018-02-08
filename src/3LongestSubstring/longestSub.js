/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let sLength = s.length;
    let setStr = new Set();
    let i=0, j=0, ans =0;
    while(i < sLength && j < sLength){
        if (!setStr.has(s[j])){
            setStr.add(s[j++]);
            ans = Math.max(ans, j - i);
        }else{
            setStr.delete(s[i++]);
        }
    }
    return ans;
};

// this method can not be accepted because time limit exceed
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//     let sLength = s.length;
//     let longest = 0;
//     var subArr =[];

//     // first step, get substring
//     if(checkSub(s,0)) {
//         var subArr = getSub(s);
//     } else {
//         subArr[0] = s;
//     }

//     // second step, check the substring to see if there is repeat character

//     // return the length
//     return longest;
// };

// var getLongest = function(subArr) {
//     let subArrlength = subArr.length;
//     let subsubArr =[];
//         for(let j = 0; j < subArrlength; j++) {
//             if(checkSub(subArr[i]),1) {
//                 subsubArr = getSub(subArr[i])
//             } else {
//                 longest = subArr[i].length > longest ? subArr[i].length : longest;
//             }
//         }
// }


// var checkSub = function(s,i) {
//     let t = s.indexOf(s[i],i+1);
//     return t;
// }
// /**
//  * @param {string} s
//  * @param {num} i
//  * @return {array} substring array
//  */    
// var getSub = function(s) {
//     let l = s.length;
//     let subArr = [];//store substring
//     let m = 0;
//     while(l > 0){
//         let t = s.indexOf(s[m], m+1); //check if s[0] repeat in string
//         let subs = s.slice(m,t);
//         m = t;
//         subArr.push(subs);
//         l = l - m;
//     }

//     return subArr;
// }    



//