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

	get last() {
		let node = this.root;
		while (node.next)
			node = node.next;
		return node;
	}

	reverse() {
		return this.root.reverse();
	}
}