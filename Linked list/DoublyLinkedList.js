// import { ListNode } from './ListNode.js';
import { LinkedList } from './LinkedList.js';

export class DoublyLinkedList extends LinkedList {
	constructor(array) {
		super(array);

		let arr = this.toArray();
		for (let i = 0; i < arr.length; i++) {
			arr[i].prev = arr[i - 1]
		}
	}

	push(...nodes) {
		if (nodes.length > 1)
			for (const node of nodes)
				this.push(node)
		else {
			let { last } = this;
			last.next = nodes[0];
			last.next.prev = last;
		}
		return this.length;
	}
}