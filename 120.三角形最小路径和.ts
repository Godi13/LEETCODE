/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
	const f = triangle[triangle.length - 1];
	for (let i = triangle.length - 2; i >= 0; i--) {
		for (let j = 0; j < triangle[i].length; j++) {
			const num = triangle[i][j];
			f[j] = Math.min(num + f[j], num + f[j + 1]);
		}
	}
	return f[0];
};
// @lc code=end

