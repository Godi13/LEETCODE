/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
	const f = [1, 1, 0];

	for (let i = 2; i <= n; i++) {
		f[i % 3] = f[(i - 1) % 3] + f[(i - 2) % 3];
	}

	return f[n % 3];
};
// @lc code=end

