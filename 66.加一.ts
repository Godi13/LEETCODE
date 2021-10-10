/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
	for (let i = digits.length - 1; i >= 0; i--) {
		digits[i]++;
		if (digits[i] > 9) {
			digits[i] = 0;
		} else {
			return digits;
		}
	}
	digits.unshift(1);
	return digits;
};
// @lc code=end

