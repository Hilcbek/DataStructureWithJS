// ! this section is all about data-structure and analysis with JavaScript
class NodeClass {
  constructor(data) {
    this.data = data;
    this.size = 0;
    this.next = null;
  }
}
class SinglyLinkedList extends NodeClass {
  constructor() {
    super();
    this.head = null;
    this.current = null;
    this.prev = null;
    this.next = null;
  }
  InsertNext(data) {
    let newNode = new NodeClass(data);
    if (!this.head) this.head = newNode;
    else {
      this.current = this.head;
      while (this.current.next) this.current = this.current.next;
      this.current.next = newNode;
    }
    this.size++;
  }
  InsertAtFirst(data) {
    let newNode = new NodeClass(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  InsertDataAfterData(after, data) {
    this.current = this.head;
    while (this.current && this.current.data !== after && this.current.next) {
      this.current = this.current.next;
    }
    if (this.current.data === after) {
      let node = new NodeClass(data);
      node.next = this.current.next;
      this.current.next = node;
    }
  }
  RemoveElementFromList(data) {
    this.current = this.head;
    while (this.current && this.current.data !== data) {
      this.prev = this.current;
      this.current = this.current.next;
    }
    if (
      this.current.data === data &&
      this.current !== this.head &&
      this.current
    ) {
      this.prev.next = this.current.next;
      this.size--;
    }
    if (this.current === this.head) {
      this.head = this.current.next;
      this.size--;
    }
  }
  AddListOfDataAtTheEnd(array) {
    this.current = this.head;
    while (this.current.next) this.current = this.current.next;
    for (let i = 0; i < array.length; i++) {
      this.current.next = new NodeClass(array[i]);
      this.current = this.current.next;
      this.size++;
    }
  }
  AddListOfDataInFrontOfTheList = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      this.InsertAtFirst(array[i]);
    }
  };
  AddListOfDataAfterSomeData(after, array) {
    for (let i = array.length - 1; i >= 0; i--) {
      this.InsertDataAfterData(after, array[i]);
    }
  }
  PrintList() {
    this.current = this.head;
    let str = "";
    while (this.current) {
      str += this.current.data;
      if (this.current.next) {
        str += " ->";
      }
      this.current = this.current.next;
    }
    console.log(str);
  }
}
let ll = new SinglyLinkedList();
ll.InsertNext(10);
ll.InsertNext(20);
ll.InsertNext(30);
ll.InsertNext(40);
ll.InsertNext(50);
ll.RemoveElementFromList(50);
ll.AddListOfDataAtTheEnd([12, 23, 34, 45, 55]);
ll.RemoveElementFromList(45);
ll.AddListOfDataInFrontOfTheList([100, 200, 300, 400, 500]);
ll.InsertDataAfterData(100, 101);
ll.AddListOfDataAfterSomeData(101, [102, 103, 104, 105]);
ll.PrintList();
