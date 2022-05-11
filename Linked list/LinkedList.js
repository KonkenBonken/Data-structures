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

	push(...nodes) {
		if (nodes.length > 1)
			for (const node of nodes)
				this.push(node)
		else
			this.last.next = nodes[0];
		return this.length;
	}

	find(value) {
		for (var node = this.root; node.value !== value; node = node.next);
		if (node.value !== value) return undefined
		return node;
	}

	at(index) {
		index++
		for (var node = this.root; node.next && --index; node = node.next);
		if (index) return undefined
		return node;
	}
}