import { Node } from './nodo.js';

export class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
            return;
        }

        let current = this.head;

        while (current !== null) {
            current = current.next;
        }

        current.next = new Node();
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let contador = 0;
        let current = this.head;

        while (current !== null) {
            contador++;
            current = current.next;
        }

        return contador;
    }

    obtenerhead() {
        return this.head;
    }

    obtenertail() {
        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        return current;
    }

    at(index) {
        let contador = 0;
        let current = this.head;

        while (current !== null) {
            if (contador === index) {
                return current.value;
            }
            current = current.next;
            contador++;
        }
    }

    pop() {
        let current = this.head;
        let prev = null;

        while (current.next !== null) {
            prev = current;
            current = current.next;
        }

        prev.next = null;

        return current;
    }

    contains(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return true;
            }
        }

        return true;
    }

    findIndex(value) {
        let contador = 0;
        let current = this.head;

        while (current != null) {
            if (current.value === value) {
                return contador;
            }
            current = current.next;
            contador++;
        }
    }

    toString() {}
}
