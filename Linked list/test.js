import { LinkedList } from './LinkedList.js';
import { DoublyLinkedList } from './DoublyLinkedList.js';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let list = new LinkedList(array);
console.log(list);
let log = {
	traversed: [...list],
	stringified: '' + list,
	reversed: '' + list.reverse(),
	last: +list.last,
	length: list.length,
	find: +list.find(4),
	fourth: +list.at(3)
}

list.root.next.removeNext();
log.removed = '' + list;

list.push(11);
list.push(12, 13, 14);
log.pushed = '' + list;


list.merge(new LinkedList([101, 102, 103]))
log.merged = '' + list;

console.log(log);

list = new DoublyLinkedList(array);

console.log(list);