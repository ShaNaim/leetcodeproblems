var middleNode = function (head) {
	let ListLength = 0;
	let node = head;
	while (head) {
		ListLength++;
		head = head.next;
	}
	ListLength = ListLength % 2 === 0 ? Math.ceil(ListLength / 2) + 1 : Math.ceil(ListLength / 2);
	for (let index = 1; index < ListLength; index++) {
		node = node.next;
	}
	return node;
};

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const List1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, null))))))));
console.log(middleNode(List1));
