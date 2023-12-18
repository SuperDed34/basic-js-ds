const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.addNode(this.rootNode, data);
  }

  addNode(node, data) {
    if (node === null) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this.addNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.addNode(node.right, data);
    }

    return node;
  }

  has(data) {
    return this.search(data) !== null;
  }

  search(data) {
    return this.searchNode(this.rootNode, data);
  }

  searchNode(node, data) {
    if (node === null || node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this.searchNode(node.left, data);
    }

    return this.searchNode(node.right, data);
  }

  find(data) {
    const foundNode = this.search(data);
    return foundNode ? foundNode : null;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      node.data = this.findMin(node.right).data;
      node.right = this.removeNode(node.right, node.data);
    }

    return node;
  }

  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  findMax(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }

  min() {
    const minNode = this.findMin(this.rootNode);
    return minNode ? minNode.data : null;
  }

  max() {
    const maxNode = this.findMax(this.rootNode);
    return maxNode ? maxNode.data : null;
  }
}

module.exports = {
  BinarySearchTree
};