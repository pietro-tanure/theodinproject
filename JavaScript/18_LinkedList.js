
function Node(Value = null, nextNode = null) {
  let _value = Value;
  let _next = nextNode;
  return {
    get value() { return _value },
    set value(value) { _value = value },
    get next() { return _next },
    set next(node) { _next = node }
  };
};


export default function LinkedList() {
  let firstNode = null;

  const append = (value) => {
    let newNode = Node(value);
    if (firstNode == null) {
      firstNode = newNode;
      return
    }
    let currentNode = firstNode;
    while (currentNode.next != null)
      currentNode = currentNode.next;
    currentNode.next = newNode;
  }

  const preprend = (value) => {
    let newNode = Node(value);
    newNode.next = firstNode;
    firstNode = newNode;
  }

  const size = () => {
    let size = 0;
    let currentNode = firstNode;
    while (currentNode != null) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  const head = () => firstNode;

  const tail = () => {
    let currentNode = firstNode;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  const at = (index) => {
    let currentNode = firstNode;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  const pop = () => {
    let currentNode = firstNode;
    if (currentNode == null)
      return;
    else if (currentNode.next == null)
      firstNode = null;
    else {
      while (currentNode.next.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
    }
  }

  const contains = (value) => {
    let currentNode = firstNode;
    while (currentNode != null) {
      if (currentNode.value == value)
        return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  const find = (value) => {
    let currentNode = firstNode;
    let index = 0;
    while (currentNode != null) {
      if (currentNode.value == value)
        return index;
      currentNode = currentNode.next;
      index++;
    }
    return null
  }

  const toString = () => {
    let currentNode = firstNode;
    string = "";
    while (currentNode != null) {
      string = string + `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    string = string + "null"
    return string
  }

  const deleteNode = (index) => {
    if (index == 0) {
      firstNode = firstNode.next
    }
    else {
      let currentNode = firstNode;
      for (let i = 1; i < index; i++) {
        currentNode = currentNode.next
      }
      currentNode.next = currentNode.next.next
    }
  }

  return {
    append, preprend, size, head, tail,
    at, pop, contains, find, toString, deleteNode
  }
}
