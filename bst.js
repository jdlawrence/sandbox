class BST {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (val === this.val) {
      return null;
    } else if (val < this.val) {
      if (this.left === null) {
        this.left = new BST(val);
      }
      else {
        this.left.insert(val);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(val);
      } else {
        this.right.insert(val);
      }
    }
  }
}

var demo = new BST(6);
demo.insert(5);
demo.insert(4);
demo.insert(3);
demo.insert(7);

function countNodes(bst) {
  var leftCount = bst.left !== null ? countNodes(bst.left) : 0;
  var rightCount = bst.right !== null ? countNodes(bst.right) : 0;
  return 1 + leftCount + rightCount;
}

function kthSmallest(bst, k) {
  // If there's a single node with no children, return it
  if (bst.left === null && bst.right === null) {
    return bst;
  }
  
  // Find the number of children to the left the current node
  var leftNodeCount = countNodes(bst.left, k);

  // If we're looking a kth element that's smaller than the current node, 
  // it must be in the left tree
  if (k <= leftNodeCount) {
    return kthSmallest(bst.left, k);
  } 
  
  // If we're looking for a kth element that's larger than the current node,
  // it must be in the right tree
  if (k > leftNodeCount + 1) {
    return kthSmallest(bst.right, k - leftNodeCount - 1);
  }

  // Otherwise, the current node is the kth element
  return bst;

  function countNodes(bst) {
    var leftCount = bst.left !== null ? countNodes(bst.left) : 0;
    var rightCount = bst.right !== null ? countNodes(bst.right) : 0;
    return 1 + leftCount + rightCount;
  }
}

console.log(kthSmallest(demo, 5));