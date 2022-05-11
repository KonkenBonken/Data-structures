import { LinkedList } from './LinkedList.js';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const list = new LinkedList(array);
const log = {
	traversed: [...list],
	stringified: '' + list,
	reversed: list.reverse(),
	last: list.last,
	length: list.length,
}

list.root.next.removeNext();
log.removed = '' + list;

list.push(11);
log.pushed = '' + list;


console.log(log);