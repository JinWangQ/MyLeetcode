/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 * 
 * overlap occurs when the next start < current end
 * 
 */
var merge = function(intervals) {
    let n = intervals.length;
    let starts = [],
        ends = [];

    for (let i = 0; i < n; i++) {
        //notice intervals is not a 2d array, it is a object
        starts[i] = intervals[i].start;
        ends[i] = intervals[i].end;
    }

    starts.sort(isort);
    ends.sort(isort);

    let res = [];
    for (let i = 0, j = 0; i < n; i++) {
        if (i == n - 1 || starts[i + 1] > ends[i]) {
            res.push([starts[j], ends[i]]);
            j = i + 1;
        }
    }
    return res;
};

var isort = function(a, b) {
    return a - b;
}