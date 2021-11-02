/*
 * @lc app=leetcode.cn id=130 lang=typescript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
	const m = board[0].length;
	const n = board.length;

	const dx = [1, 0, 0, -1];
	const dy = [0, 1, -1, 0];

	const chosen = [];
	const checked = {};
	let allow = true;

	const check = (x, y) => {
			if (checked[`${x}-${y}`]) {
				return;
			}
			chosen.push([x, y]);
			checked[`${x}-${y}`] = true

			for (let k = 0; k < 4; k++) {
					const nx = x + dx[k];
					const ny = y + dy[k];

					if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
						allow = false;
						continue;
					}

					if (board[ny][nx] === 'O') {
						if (nx === 0 || ny === 0 || nx === m - 1 || ny === n - 1) {
							allow = false;
						}
						check(nx, ny);
					}
			}
	}

	for (let x = 0; x < m; x++) {
			for (let y = 0; y < n; y++) {
					if (board[y][x] === 'X') continue;
					check(x, y);
					if (allow) {
						for (const [x, y] of chosen) {
							board[y][x] = 'X';
						}
					} else {
						allow = true;
					}
					chosen.length = 0;
			}
	}
};
// @lc code=end

