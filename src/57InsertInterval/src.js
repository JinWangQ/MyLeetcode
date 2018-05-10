/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 *
 * push the new interval into the array
 * than merge the overlaps
 * 
 */
var insert = function(intervals, newInterval) {
    let n = intervals.length;
    if (n === 0)
        return [newInterval];

    intervals.push(newInterval);

    let starts = [],
        ends = [];
    for (let i = 0; i <= n; i++) {
        starts.push(intervals[i].start);
        ends.push(intervals[i].end);
    }

    starts.sort(sortNum);
    ends.sort(sortNum);
    let res = [];
    for (let i = 0, j = 0; i <= n; i++) {
        if (i == n || starts[i + 1] > ends[i]) {
            res.push([starts[j], ends[i]]);
            j = i + 1;
        }
    }

    return res;
};

var sortNum = function(a, b) {
    return a - b;
};