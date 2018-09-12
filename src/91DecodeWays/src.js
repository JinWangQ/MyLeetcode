/**
 * @param {string} s
 * @return {number}
 *
 * e.g s = "12324222" result:30
 * number: 1 2 3 2 4 2 2  2  2
 * ways:   1 2 3 3 6 6 12 18 30
 *
 * when the number sequence can be decode, the #ways = pre + cur
 * 0 in '10' should be consider carefully
 */
var numDecodings = function(s) {
    let n = s.length;
    if (n === 0) return 0;

    let pre = 1,
        cur = s.charAt(0) == "0" ? 0 : 1,
        temp = 0;

    for (let i = 1; i < n && cur != 0; ++i) {
        temp = cur;
        if (s.charAt(i - 1) == "1" || s.charAt(i - 1) == "2" && s.charAt(i) <= "6") {
            if (s.charAt(i) == "0")
                cur = pre;
            else
                cur += pre;
        } else if (s.charAt(i) == "0")
            cur = 0;
        pre = temp;
    }

    return cur;
};