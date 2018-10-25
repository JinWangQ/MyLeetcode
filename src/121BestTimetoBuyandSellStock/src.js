/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * e.g [7,1,5,3,6,4]
 * profit when day [1] buy in day day [3] sell out:
 * 3 - 1 = 2
 * Kadane's Algorithm:
 * 3 - 5 + 5 - 1 = 2
 */
var maxProfit = function(prices) {
	let maxCur = 0,
		maxSofar = 0;
	for (let i = 1; i < prices.length; i++) {
		maxCur = Math.max(0, maxCur += prices[i] - prices[i - 1]);
		maxSofar = Math.max(maxCur, maxSofar);
	}
	return maxSofar;
};