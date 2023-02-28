function cutLog(p, n) {
  let dp = new Array(n+1).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], p[j] + dp[i-j]);
    }
  }
  return dp[n];
}
