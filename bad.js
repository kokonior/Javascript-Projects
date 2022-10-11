#Hacktoberfest2022
#Hacktoberfestfun

class ListNode {

  constructor(val, next = null) {

    

    this.val = val;

    this.next = next;

  }

}

const linkedList = [5, 4, 3, 2, 1].reduce((acc, val) => new ListNode(val, acc), null);

const printList = (head) => {

  if(!head) {

    return;

  }

  console.log(head.val);

  printList(head.next);

}

// --------- solution -----------

var reverseList = function(head) {

  let prev = null;

  let current = head;

  

  while(current) {

    let nextTemp = current.next;

    current.next = prev;

    prev = current;

    current = nextTemp;

  }

  

  return prev;

};

printList(linkedList);

console.log('after reverse')

printList(reverseList(linkedList))
