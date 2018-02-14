/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let zigs = "";
    let length = s.length;
    if (length <= numRows || numRows == 1) {
        zigs = s;
    } else {
        //strArr is actually a two-dimentional array
        //every element in strArr is a array
        var strArr = new Array(numRows);
        for (let i = 0; i < numRows; i++) {
            strArr[i] = [];
        }
        // d makes it possible to zigzag the original string
        for (let i = 0, d = 1, row = -1; i < length;) {
            if (d + row < 0 || d + row >= numRows) {
                d = -d;
            } else {
                row += d;
                strArr[row].push(s[i++]);
            }
        }
        for (let i = 1; i < numRows; i++) {
            strArr[0] = strArr[0].concat(strArr[i]);
        }
        zigs = strArr[0].join('');
    }

    return zigs;

};
// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  * can not work because time limit exceeded
//  */
// var convert = function(s, numRows) {
//     let zigs = "";
//     let length = s.length;
//     if (length <= numRows || numRows == 1) {
//         zigs = s;
//     } else {
//         var strArr = new Array(numRows);
//         for (let i = 0; i < numRows; i++) {
//             strArr[i] = [];
//         }
//         let i = 0;
//         while(i < length) {
//             for(let idx = 0; idx < numRows && i < length; idx++) {
//                 strArr[idx].push(s[i++]);
//             }
//             for(let idx = numRows - 2; idx > 0 && i < length; idx--) {
//                 strArr[idx].push(s[i++]);
//             }
//         }
//         for(let idx = 1; idx < numRows; i++) {
//             strArr[0] = strArr[0].concat(strArr[idx]);
//         }
//         zigs = strArr[0].join('');
//     }

//     return zigs;

// };