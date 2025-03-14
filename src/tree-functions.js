/**
 * The tree node function constructor
 * This creates the tree node object
 * @param value
 * @constructor
 */
export function TreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

export function createTree() {
    let root = new TreeNode(10);

    root.left = new TreeNode(20);
    root.right = new TreeNode(30);

    root.left.left = new TreeNode(40);
    root.left.right = new TreeNode(50);

    root.right.left = new TreeNode(60);
    root.right.right = new TreeNode(70);

    root.left.left.right = new TreeNode(80);

    return root;
}

/**
 * Walk the tree outputting the current node first, then traversing the left
 * side and then the right.
 * @param node {TreeNode} the tree node
 * @param retVal {Array} the returned value
 */
export function dfsPreOrder(node, retVal =[]) {
    if (!node) return retVal;
    console.log("current node value is", node.value); // Process node
    //console.log("retVal before adding is", retVal);
    // retVal = retVal + (retVal ?"-":"") + node.value;
    retVal.push(node.value);
    //console.log("retVal after adding is", retVal);
    retVal = dfsPreOrder(node.left, retVal);
    //console.log("after recursing left value is", node.value);
    retVal = dfsPreOrder(node.right, retVal);
    return retVal;
    //console.log("after recursing right value is", node.value);

}

/**
 * Walk the tree traversing left first, outputting the value
 * of the left child
 * @param node {TreeNode} the tree node
 */
export function dfsInOrder(node, retVal = []) {
    if (!node) return retVal;
    retVal = dfsInOrder(node.left, retVal);
    console.log("node value is", node.value); // Process node
    retVal.push(node.value);
    retVal = dfsInOrder(node.right, retVal);
    return retVal;
}

export function dfsPostOrder(node, retVal = []) {
    if (!node) return retVal;
    retVal = dfsPostOrder(node.left, retVal);
    retVal = dfsPostOrder(node.right, retVal);
    console.log("node value is", node.value); // Process node
    retVal.push(node.value);
    return retVal;
}

export function bfs(root, retVal = []) {
    if (!root) return;
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        console.log("node value is", node.value); // Process node
        retVal.push(node.value)
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return retVal;
}

/**
 * Determine if a value is found in the tree
 * @param node {TreeNode} the tree node
 * @param value
 * @returns {boolean|boolean|*}
 */
export function searchBST(node, value) {
    if (!node) return false;
    if (node.value === value) return true;
    if (value < node.value) return searchBST(node.left, value);
    else return searchBST(node.right, value);
}

/**
 * Determine whether or not the tree is a valid binary search tree
 * @param node {TreeNode} the tree node
 * @param min
 * @param max
 * @returns {boolean|*}
 */
export function isValidBST(node, min = null, max = null) {
    if (!node) return true;
    if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) return false;
    return isValidBST(node.left, min, node.value) && isValidBST(node.right, node.value, max);
}

/**
 * Invert a tree left vs right
 * @param node {TreeNode} the tree node
 * @returns {*|null}
 */
export function invertTree(node) {
    if (!node) return null;
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    invertTree(node.left);
    invertTree(node.right);
    return node;
}

/**
 * Get the height from the root to the deepest node
 * @param node
 * @returns {number}
 */
export function treeHeight(node) {
    if (!node) return 0;
    const leftHeight = treeHeight(node.left);
    const rightHeight = treeHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
}

/**
 * Get the number of nodes in the tree
 * @param node
 * @returns {*|number}
 */
export function treeSize(node) {
    if (node === null) {
        return 0;
    }
    return treeSize(node.left) + treeSize(node.right) + 1;
}