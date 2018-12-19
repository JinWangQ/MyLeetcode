const repeatedSubstringPattern = s => {
    let l = s.length;
    for (let i = Math.floor(l / 2); i >= 1; i--) {
        if (l % i === 0) {
            let j = l / i;
            let substr = s.substring(0, i);
            let newS = "";
            for (let k = 0; k < j; k++) {
                newS += substr;
            }
            if (newS == s) return true;
        }
    }
    return false;
};