/*
 * @lc app=leetcode.cn id=560 lang=typescript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
	let n = nums.length;
	const s = Array(n + 1).fill(0);
	s[0] = 0;
	for (let i = 1; i <= n; i++) {
		s[i] += s[i-1] + nums[i - 1];
	}

	let count = 0;
	for (let left = 0; left < n; left++) {
		for (let right = left + 1; right <= n; right++) {
			if (s[right] - s[left] === k) {
				count++;
			}
		}
	}
	return count;
};
// @lc code=end

