/**
 * @param {string} s
 * @return {number}
 */
// low performance
// var firstUniqChar = function(s) {
//     if(s.length == 1) return 0;
//     for(let i = 0; i < s.length; i++){
//         if(i > 0 && s.charAt(i) == s.charAt(i-1)) continue;
//         let temp = s.slice(0, i) + s.slice(i+1, s.length);
//         if(temp.indexOf(s.charAt(i)) == -1) return i;
//     }
//     return -1;
// };

const firstUniqChar = s => {
    if (s.length == 1) return 0;
    let dic = "qwertyuioplkjhgfdsazxcvbnm";
    let arr = new Array(26);
    arr.fill(0);
    for (let i = 0; i < s.length; i++) {
        arr[dic.indexOf(s.charAt(i))]++;
    }
    // Have to loop string s, since we'd like to get the first unique char
    for (let i = 0; i < s.length; i++) {
        if (arr[dic.indexOf(s.charAt(i))] == 1) return i;
    }
    return -1;
}