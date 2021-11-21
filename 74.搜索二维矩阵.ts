/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
	const m = matrix.length;
	const n = matrix[0].length;
	let left = 0;
	let right = m * n - 1;
	while (left <= right) {
		let mid = (left + right) >> 1;
		const num = matrix[Math.floor(mid / n)][mid % n];
		if (num === target) {
			return true;
		} else if (num < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return false;
};
// @lc code=end

