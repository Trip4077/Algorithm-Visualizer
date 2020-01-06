class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    remove() {
        if(this.prev) {
        this.prev.next = this.next
        }

        if(this.next) {
        this.next.prev = this.prev
        }
    }
}

  
class DLL {
    constructor(node=null) {
        this.head = node;
        this.tail = node;
        this.length = node ? 1 : 0;
    }

    print_list() {
        let current = this.head
        while(current && current.next) {
        console.log(current);

        current = current.next
        }

        console.log(current)
    }

    add_to_head(value) {
        const newNode = new Node(value)
        this.length++

        if(!this.head && !this.tail) {
        this.head = newNode;
        this.tail = newNode
        } else {
        newNode.next = this.head;
        this.head.prev = newNode

        this.head = newNode
        }
    }

    remove_from_head() {
        const value = this.head.value

        this.remove_from_list(this.head);

        console.log(`Node Value ${value} was removed`);
    }

    add_to_tail(value) {
        const newNode = new Node(value);
        this.length++

        if(!this.head && !this.tail) {
        this.head = newNode;
        this.tail = newNode;
        } else {
        newNode.prev = this.tail;

        this.tail.next = newNode;
        this.tail = newNode;
        }
    }

    remove_from_tail(node) {
        const value = this.tail.value;

        this.remove_from_list(this.tail);

        console.log(`Node value ${value} was removed`)
    }

    remove_from_list(node) {
        if(!this.head && !this.tail) return;

        if(this.head === this.tail) {

        this.head = null;
        this.tail = null;
        this.length--

        } else if(this.head === node) {

        this.head = node.next;
        node.remove();
        this.length--

        } else if(this.tail === node) {

        this.tail = node.prev;
        node.remove();
        this.length--

        } else {

        node.remove();
        this.length--  
        
        }
    }
}

export {
    Node,
    DLL
}
  
  
 