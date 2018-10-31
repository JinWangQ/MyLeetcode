/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * prices[i] can be either buy in price or sell out price. 
 * 1st transction
 * buy1: keep compare to get the minimum buy in price.
 * sell1: Keep compare to get the maximum sell out profit.
 * 2nd transction(based on 1st transction)
 * buy2: use the 1st profit as principal to buy another stock, so the buy2 would be a negative number
 * sell2: the total profit = the max of (sell out price - buy in price(which is a neg number))
 *        so in fact total profit = profit of (1st transc + 2nd transc).
 */
var maxProfit = function(prices) {
	let sell1 = 0,
		sell2 = 0,
		buy1 = Number.MAX_SAFE_INTEGER,
		buy2 = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < prices.length; i++) {
		buy1 = Math.min(buy1, prices[i]);
		sell1 = Math.max(sell1, prices[i] - buy1);
		buy2 = Math.min(buy2, prices[i] - sell1); // the lower the prices[i] is, the smaller the buy2 is
		sell2 = Math.max(sell2, prices[i] - buy2);
	}

	return sell2;

};