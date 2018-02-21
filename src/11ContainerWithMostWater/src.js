/**
 * @param {number[]} height
 * @return {number}
 * the brute force is not working because of the time limit
 * this is kind of silde window
 */
var maxArea = function(height) {
	let l = 0,
		r = height.length - 1;
	let maxarea = 0;
	while (l < r) {
		maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
		height[l] < height[r] ? l++ : r--;
	}
	return maxarea;

};