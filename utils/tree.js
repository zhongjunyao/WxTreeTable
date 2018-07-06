class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }
}

class MultiwayTree {
  constructor() {
    this._root = null;
  }
  //深度优先遍历
  traverseDF(callback) {
    let stack = [],
      found = false;
    stack.unshift(this._root);
    let currentNode = stack.shift();
    while (!found && currentNode) {
      found = callback(currentNode) === true ? true : false;
      if (!found) {
        stack.unshift(...currentNode.children);
        currentNode = stack.shift();
      }
    }
  }
  //广度优先遍历
  traverseBF(callback) {
    let queue = [],
      found = false;
    queue.push(this._root);
    let currentNode = queue.shift();
    while (!found && currentNode) {
      found = callback(currentNode) === true ? true : false;
      if (!found) {
        queue.push(...currentNode.children)
        currentNode = queue.shift();
      }
    }
  }
  contains(callback, traversal) {
    traversal.call(this, callback);
  }
  add(data, toData, traversal) {
    let node = new Node(data)
    if (this._root === null) {
      this._root = node;
      return this;
    }
    let parent = null,
      callback = function (node) {
        if (node.data === toData) {
          parent = node;
          return true;
        }
      };

    this.contains(callback, traversal);
    if (parent) {
      parent.children.push(node);
      node.parent = parent;
      return this;
    } else {
      throw new Error('Cannot add node to a non-existent parent.');
    }
  }
  remove(data, fromData, traversal) {
    let parent = null,
      childToRemove = null,
      callback = function (node) {
        if (node.data === fromData) {
          parent = node;
          return true;
        }
      };

    this.contains(callback, traversal);
    if (parent) {
      let index = this._findIndex(parent.children, data);
      if (index < 0) {
        throw new Error('Node to remove does not exist.');
      } else {
        childToRemove = parent.children.splice(index, 1);
      }
    } else {
      throw new Error('Parent does not exist.');
    }
    return childToRemove;
  }
  _findIndex(arr, data) {
    let index = -1;
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i].data === data) {
        index = i;
        break;
      }
    }
    return index;
  }
}