SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode(data);
    if (!head) {
        head = newNode;
        return head;
    } else {
        newNode.next = head;
        head = newNode;
    }

    return head;
}

