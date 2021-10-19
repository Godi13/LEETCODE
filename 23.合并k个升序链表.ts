/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
	if (!lists.length) return null;

	const n = lists.length;
	if (n === 1) return lists[0];

	const pre = lists.splice(0, Math.floor(n / 2));

	let first =  mergeKLists(pre);
	let second = mergeKLists(lists);

	let protect = new ListNode(0);
	let head = protect;

	while (first && second) {
		if (first.val <= second.val) {
			head.next = first;
			first = first.next;
		} else {
			head.next = second;
			second = second.next;
		}
		head = head.next;
	}

	head.next = first || second;

	return protect.next;
};
// @lc code=end

