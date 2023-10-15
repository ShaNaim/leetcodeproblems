var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    // console.log(dp);
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    // console.log(dp[n]);
  }

  return dp[n];
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
console.log(minCostClimbingStairs([10, 15, 20]));
