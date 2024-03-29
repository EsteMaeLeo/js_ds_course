class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }
  
    printList() {
      let temp = this.head;
      while (temp !== null) {
        console.log(temp.value);
        temp = temp.next;
      }
    }
  
    getHead() {
      if (this.head === null) {
        console.log("Head: null");
      } else {
        console.log("Head: " + this.head.value);
      }
    }
  
    getTail() {
      if (this.tail === null) {
        console.log("Tail: null");
      } else {
        console.log("Tail: " + this.tail.value);
      }
    }
  
    getLength() {
      console.log("Length: " + this.length);
    }
  
    makeEmpty() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    pop() {
      if (!this.head) {
        return this;
      } else if (this.length === 1) {
        this.makeEmpty();
        return this;
      } else {
        let temp = this.head;
        let before = this.head;
        while (temp !== null) {
          console.log(temp.value);
          if (!temp.next) {
            console.log("last: ", temp.next);
            this.tail = before;
            before.next = null;
            this.length--;
            return this;
          }
          before = temp;
          temp = temp.next;
        }
      }
    }
  }
  
  function test() {
    let myLinkedList = new LinkedList(1);
    myLinkedList.makeEmpty();
    myLinkedList.push(1);
    myLinkedList.push(2);
  
    myLinkedList.pop();
  
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:");
    myLinkedList.printList();
  }
  
  test();
  