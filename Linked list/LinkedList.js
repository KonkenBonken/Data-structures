import { ListNode } from './ListNode.js';

export class LinkedList {
	constructor(array) {
		if (!Array.isArray(array) || !array.length) throw new Error('Input is not an array');

		let prev = this.root = new ListNode(array[0]);
		for (var item of array.slice(1)) {
			prev.next = item;
			prev = prev.next;
		}
	}

	get length() {
		return this.toArray().length
	}

	get last() {
		for (var node = this.root; node.next; node = node.next);
		return node;
	}

	toArray() {
		const result = [this.root.value];
		let last = this.root;
		do {
			last = last.next;
			result.push(last.value);
		} while (last.next);
		return result;
	}

	*[Symbol.iterator]() {
		yield* this.toArray()
	}

	toString() {
		return this.toArray().toString()
	}

	reverse() {
		return this.root.reverse();
	}

	push(node) {
		this.last.next = node;
		return this.length;
	}
}