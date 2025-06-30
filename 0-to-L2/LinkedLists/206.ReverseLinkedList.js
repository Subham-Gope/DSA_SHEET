// 206. Reverse Linked List
// Easy
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // creating a Node
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   // add node at the end
//   append(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }
// }

// // print the entire list

// function print(value) {
//   let result = "";
//   let current = value;
//   while (current) {
//     result += current.value + " -> ";
//     current = current.next;
//   }
//   result += "null";
//   console.log(result);
// }

// const linkedlist1 = new LinkedList();
// linkedlist1.append(3);
// linkedlist1.append(4);
// linkedlist1.append(3);
// print(linkedlist1.head);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
  }

  // print the linkedlist
  print() {
    let result = "";
    let current = this.head;
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }

  // delete a node
  delete(value) {
    // checking if list is empty
    if (!this.head) return;

    // if the node to delete is the head
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    //for any other node
    let current = this.head;
    while (current.next && current.next.value != value) {
      current = current.next;
    }

    // if the value was found , skip the node
    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Reverse a linked list
  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next; // save next node
      current.next = prev; //reverse pointer
      prev = current; //move prev forward
      current = next; //move current forward
    }

    this.head = prev; //update head to new front
  }

  // Insert at a given index
  insertAt(index, value) {
    if (index < 0) {
      console.log("Invalid Index");
      return;
    }

    const newNode = new Node(value);

    // special case : insert at the head
    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let i = 0;
    while (current && i < index - 1) {
      current = current.next;
      i++;
    }

    if (!current) {
      console.log("Index out of bounds");
      return;
    }

    // insert new node
    newNode.next = current.next;
    current.next = newNode;
  }

  // find a specific value
  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // find the size
  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // find middle
  findMiddle() {
    if (!this.head) return null;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.value;
  }

  hasCycle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) return true;
    }
    return false;
  }

  removeNthFromEnd(n) {
    const dummy = new Node(0);
    dummy.next = this.head;

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
      if (!fast)
        return `Enter a n value smaller than the length of the linkedlist`; // n is Longer than list
      fast = fast.next;
    }

    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }

    // skip the nth node
    if (slow.next) {
      slow.next = slow.next.next;
    }
    this.head = dummy.next;
  }
}

const linkedlist2 = new LinkedList();
linkedlist2.prepend(2);
linkedlist2.prepend(3);
linkedlist2.prepend(8);
linkedlist2.prepend(7);
linkedlist2.prepend(8);
linkedlist2.prepend(0);

linkedlist2.print();
linkedlist2.delete(3);
linkedlist2.print();
linkedlist2.reverse();
linkedlist2.print();
linkedlist2.insertAt(3, 4);
linkedlist2.print();
console.log(linkedlist2.find(7));
console.log(linkedlist2.size());
console.log(linkedlist2.findMiddle());
console.log(linkedlist2.hasCycle());
linkedlist2.removeNthFromEnd(3);
linkedlist2.print();
