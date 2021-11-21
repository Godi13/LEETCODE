/*
 * @lc app=leetcode.cn id=875 lang=typescript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
	piles.sort((a, b) => a - b);

	let left = 0;
	let right = piles[piles.length - 1];

	while (left < right) {
		const mid = (right + left) >> 1;

		let sum = 0;

		for (const pile of piles) {
			sum += Math.ceil(pile / mid);

			if (sum > h) {
				left = mid + 1;
				break;
			}
		}

		if (sum <= h) {
			right = mid;
		}
	}

	return right;
};
// @lc code=end

