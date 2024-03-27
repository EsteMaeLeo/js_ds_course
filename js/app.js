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
      return null;
    }
    let temp = this.head;
    let before = this.head;
    while (temp.next) {
      console.log(temp.value);
      before = temp;
      temp = temp.next;
    }
    this.tail = before;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.makeEmpty();
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shiftMyCode() {
    if (!this.head) {
      return null;
    }
    let temp = this.head.next;
    if (temp) {
      let shiftNode = this.head;
      this.head = temp;
      temp = null;
      this.length--;
      return shiftNode;
    } else {
      let shiftNode = this.head;
      this.makeEmpty();
      return shiftNode;
    }
  }
  shift() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  getMyCode(index) {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    let i = 0;
    while (temp.next && i < index) {
      if (i === index) {
        break;
      }
      temp = temp.next;
      i++;
    }
    return temp;
  }

  set(index, value) {
    let setNode = this.get(index);
    if (setNode) {
      setNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    }
    const newNode = new Node(value);
    let nodeBefore = this.get(index - 1);
    newNode.next = nodeBefore.next;
    nodeBefore.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift(value);
    } else if (index === this.length) {
      return this.pop(value);
    }
    let nodeBefore = this.get(index - 1);
    let nodeTmp = nodeBefore.next;
    nodeBefore.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;
  }
}

function testRemove(){}

function testInsert() {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(3);

  console.log("LL before insert():");
  myLinkedList.printList();

  myLinkedList.insert(1, 2);

  console.log("\nLL after insert(2) in middle:");
  myLinkedList.printList();

  myLinkedList.insert(0, 0);

  console.log("\nLL after insert(0) at beginning:");
  myLinkedList.printList();

  myLinkedList.insert(4, 4);

  console.log("\nLL after insert(4) at end:");
  myLinkedList.printList();
}

function testSet() {
  let myLinkedList = new LinkedList(0);
  myLinkedList.push(1);
  myLinkedList.push(2);
  myLinkedList.push(3);

  console.log("Linked List before set():");
  myLinkedList.printList();

  myLinkedList.set(2, 99);

  console.log("\nLinked List after set():");
  myLinkedList.printList();
}

function testGet() {
  let myLinkedList = new LinkedList(0);
  console.log("GET() function:");

  myLinkedList.push(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();

  console.log(myLinkedList.get(3).value);
}

function textShift() {
  console.log("Shift() function:");

  let myLinkedList = new LinkedList(2);
  myLinkedList.push(1);

  // (2) Items in LL - Returns 2 Node
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.shift().value);
  } else {
    console.log("null");
  }

  // (1) Item in LL - Returns 1 Node
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.shift().value);
  } else {
    console.log("null");
  }

  // (0) Items in LL - Returns null
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.shift().value);
  } else {
    console.log("null");
  }

  console.log("Shift() function MY CODE:");

  let myLinkedListCode = new LinkedList(5);
  myLinkedListCode.push(1);
  myLinkedListCode.push(10);
  myLinkedListCode.push(7);

  // (2) Items in LL - Returns 2 Node
  if (myLinkedListCode.length !== 0) {
    console.log(myLinkedListCode.shiftMyCode().value);
  } else {
    console.log("null");
  }

  // (1) Item in LL - Returns 1 Node
  if (myLinkedListCode.length !== 0) {
    console.log(myLinkedListCode.shiftMyCode().value);
  } else {
    console.log("null");
  }

  // (0) Items in LL - Returns null
  if (myLinkedListCode.length !== 0) {
    console.log(myLinkedListCode.shiftMyCode().value);
  } else {
    console.log("null");
  }
  // (0) Items in LL - Returns null
  if (myLinkedListCode.length !== 0) {
    console.log(myLinkedListCode.shiftMyCode().value);
  } else {
    console.log("null");
  }
  // (0) Items in LL - Returns null
  if (myLinkedListCode.length !== 0) {
    console.log(myLinkedListCode.shiftMyCode().value);
  } else {
    console.log("null");
  }
}

function test2() {
  let myLinkedList = new LinkedList(2);
  myLinkedList.push(3);

  console.log("Before unshift():");
  console.log("-----------------");
  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();

  console.log("\nLinked List:");
  myLinkedList.printList();

  myLinkedList.unshift(1);

  console.log("\nAfter unshift():");
  console.log("----------------");
  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();

  console.log("\nLinked List:");
  myLinkedList.printList();
}

function test() {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);

  // (2) Items in LL - Returns 2 Node
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.pop().value);
  } else {
    console.log("null");
  }

  // (1) Item in LL - Returns 1 Node
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.pop().value);
  } else {
    console.log("null");
  }

  // (0) Items in LL - Returns null
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.pop().value);
  } else {
    console.log("null");
  }
}

/*test();
test2();
textShift();
testGet();
testSet();*/
testInsert();
