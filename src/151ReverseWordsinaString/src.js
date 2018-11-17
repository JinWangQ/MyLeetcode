/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    let charArr = str.split(" ");

    //for cases like "  a", "  " 
    let noSpaces = [];
    for (char of charArr) {
        if (char !== "")
            noSpaces.push(char);
    }

    //inspired by #189
    let low = 0,
        high = noSpaces.length - 1;
    while (low < high) {
        let temp = noSpaces[low];
        noSpaces[low] = noSpaces[high];
        noSpaces[high] = temp;
        low++;
        high--;
    }
    return noSpaces.join(" ");
};