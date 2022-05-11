import { LinkedList } from './LinkedList.js';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const list = new LinkedList(array);
console.log(...list);
console.log('' + list);
console.log(list.reverse());