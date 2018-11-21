/**
 * @param {string} s
 * @return {string}
 */
//two pointers
var reverseVowels = function(s) {
    let charArr = [...s];
    let low = 0,
        high = charArr.length - 1;
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    while (low < high) {
        while (low < high && (vowels.indexOf(charArr[low]) == -1))
            low++;
        while (low < high && (vowels.indexOf(charArr[high]) == -1))
            high--;

        [charArr[low], charArr[high]] = [charArr[high], charArr[low]];

        low++;
        high--;
    }
    return charArr.join("");
};