/**
 * @param {number[]} heights
 * @return {number}
 *
 * A very good explanation's here:
 * https://www.youtube.com/watch?v=RVIh0snn4Qc
 * 
 */
var largestRectangleArea = function(heights) {
    let n = heights.length;
    let s = [];
    let maxArea = 0;

    for (let i = 0; i <= n; i++) {
        let h = (i == n ? 0 : heights[i]);
        if (s.length == 0 || h >= heights[s[s.length - 1]])
            s.push(i);
        else {
            let currindex = s.pop(),
                currarea = heights[currindex] * (s.length == 0 ? i : i - 1 - s[s.length - 1])
            maxArea = Math.max(maxArea, currarea);
            i--;
        }
    }
    return maxArea;
};