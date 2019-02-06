/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let strArr = str.split(" ");
    if(pattern.length != strArr.length) return false;
    let dic = {},//dic[pattern] = word
        patt = {};//patt[word] = pattern
    for(let i = 0; i < pattern.length; i++){
        if(dic[pattern[i]] && dic[pattern[i]] != strArr[i]) return false;
        if(patt[strArr[i]] && patt[strArr[i]] != pattern[i]) return false;
        dic[pattern[i]] = strArr[i];
        patt[strArr[i]] = pattern[i];
    }
    return true;
    
};