/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let profit = 0;
	for (let i = 0; i < prices.length - 1; i++) {
		let dif = (prices[i + 1] - prices[i])
		profit += dif > 0 ? dif : 0;
	}

	return profit;
};