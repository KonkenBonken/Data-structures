export class ListNode {
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

	valueOf() {
		return +this.value
	}

	reverse() {
		if (this.next) var array = this.next.reverse();
		else return [];

		array.push(this.value);
		return array;
	}

	removeNext() {
		if (!this.next) return;
		if (this.next.next)
			this.next = this.next.next;
		else this.next = undefined;
	}
}