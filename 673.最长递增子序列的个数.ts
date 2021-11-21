/*
 * @lc app=leetcode.cn id=673 lang=typescript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
function findNumberOfLIS(nums: number[]): number {
	const n = nums.length;
	const dp = Array(n).fill(1);
	const cnt = Array(n).fill(1);
	let max = 0;
	let ans = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				if (dp[i] === dp[j] + 1) {
					cnt[i] += cnt[j];
				}
				if (dp[i] < dp[j] + 1) {
					dp[i] = dp[j] + 1;
					cnt[i] = cnt[j];
				}
			}
		}
		if (max === dp[i]) {
			ans += cnt[i];
		}
		if (max < dp[i]) {
			max = dp[i];
			ans = cnt[i];
		}
	}

	return ans;
};
// @lc code=end

