/*
 * @lc app=leetcode.cn id=697 lang=typescript
 *
 * [697] 数组的度
 */

// @lc code=start
function findShortestSubArray(nums: number[]): number {
	const h: Record<string, number[]> = {};
	for (let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if (!h[n]) {
			h[n] = [i];
		} else {
			h[n].push(i);
		}
	}
	let degree = 0;
	let len = 0;
	Object.values(h).forEach(arr => {
		if (degree <= arr.length) {
			const L = arr[arr.length - 1] - arr[0] + 1;
			if (len > 0 && degree === arr.length) {
				len = Math.min(len, L);
			} else {
				len = L;
				degree = arr.length;
			}
		}
	})
	return len;
};
// @lc code=end

