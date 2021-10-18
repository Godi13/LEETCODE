/*
 * @lc app=leetcode.cn id=811 lang=typescript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
function subdomainVisits(cpdomains: string[]): string[] {
	const h = {};
	for (const cpdomain of cpdomains) {
		const [n, domain] = cpdomain.split(' ');
		const arr = domain.split('.');
		arr.reverse().forEach((s, i) => {
			let key = s;
			while (i > 0) {
				i--;
				key += `.${arr[i]}`;
			}
			h[key] = (h[key] || 0) + +n;
		})
	}
	return Object.entries(h).reduce((arr, [k, v]) => {
		arr.push(`${v} ${k}`);
		return arr;
	} ,[]);
};
// @lc code=end

