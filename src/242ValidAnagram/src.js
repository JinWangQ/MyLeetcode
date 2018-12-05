/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     if(s.length != t.length) return false;
//     let charArr = [...s];
//     for(let i = 0; i < t.length; i++){
//         let index = charArr.indexOf(t[i]);
//         if(index > -1) {
//             charArr.splice(index, 1);
//         }
//     }
//     return charArr == 0 ? true: false;
// };

const isAnagram = (s, t) => {
    if (s.length != t.length) return false;
    let dic = new Array(26);
    dic.fill(0);

    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - 97;
        dic[index]++;
    }

    for (let i = 0; i < t.length; i++) {
        let index = t.charCodeAt(i) - 97;
        dic[index]--;
        if (dic[index] < 0) return false;
    }

    return dic.every(val => val == 0);
}