/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let n = costs.length;
	let maxVal = costs[0];
	
    for (let i = 0; i < n; i++) {
        if (costs[i] > maxVal) maxVal = costs[i];
    }
    let count = new Array(maxVal+1).fill(0);
    for (let i = 0; i < n; i++) {
        count[costs[i]]++;
    }
    let res = 0;
    let totalCost = 0;
    let temp = coins;
    for (let i = 1; i < count.length; i++) {
        if (totalCost < coins) {
            for (let j = 0; j < count[i]; j++) {
                if (temp - i >= 0) {
                    res++;
                    totalCost += i;
                    temp -= i;
                }
            }
        }
    }
    return res;
};