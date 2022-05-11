class ListNode {
	constructor(value, next) {
		if (value instanceof ListNode) {
			this.value = value.value;
			this.next = value.next;
		} else {
			if (value === undefined) throw new Error('No value provided');
			this.value = value;
			if (next !== undefined && !(next instanceof ListNode)) throw new Error('Input is not a Node');
			if (next) this.next = next;
		}
	}
	set next(node) {
		if (!(node instanceof ListNode))
			node = new ListNode(node);
		this._next = node
	}
	get next() {
		return this._next;
	}
}

export class LinkedList {
	constructor(array) {
		if (!Array.isArray(array) || !array.length) throw new Error('Input is not an array');

		let prev = this.root = new ListNode(array[0]);
		for (var item of array.slice(1)) {
			prev.next = item;
			prev = prev.next;
		}
	}
}