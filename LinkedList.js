/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	let newNode = {
		val: 0,
		next: null,
	};
	let previous = newNode;

	while (list1 && list2) {
		console.log("LIST1 ::", list1, "LIST2", list2);
		if (list1.val >= list2.val) {
			previous.next = list2;
			list2 = list2.next;
		} else {
			previous.next = list1;
			list1 = list1.next;
		}
		previous = previous.next;
	}

	if (list1) previous.next = list1;
	if (list2) previous.next = list2;

	return newNode.next;
};

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const List1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
const List2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
console.log(mergeTwoLists(List1, List2));
