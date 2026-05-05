import { Node } from './nodo.js';
import { LinkedList } from './lista.js';

const list = new LinkedList();

list.append(10);
list.append(20);
list.prepend(5);

console.log(list.toString());
// ( 5 ) -> ( 10 ) -> ( 20 ) -> null

console.log(list.size()); // 3
console.log(list.obtenerhead()); // 5
console.log(list.obtenertail()); // 20
console.log(list.at(1)); // 10
console.log(list.contains(20)); // true
console.log(list.findIndex(10)); // 1

list.pop();
console.log(list.toString());
