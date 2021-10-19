/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
	nums = nums.sort((a, b) => a - b);
	const ans = [];
	const loop = (start: number) => {
		if (start === nums.length) {
			ans.push([...nums]);
			return;
		}
		const m = {};
		for (let i = start; i < nums.length; i++) {
			const num = nums[i];
			if (!m[num]) {
				[nums[start], nums[i]] = [nums[i], nums[start]];
				loop(start + 1);
				[nums[start], nums[i]] = [nums[i], nums[start]];
				m[num] = true;
			}
		}
	}
	loop(0);
	return ans;
};
// @lc code=end


