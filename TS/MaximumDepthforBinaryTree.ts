/*

Steps to solve the Problem:

Recursive Approach:
1. If root is null, return 0.
2. Recursively find the maximum depth of the left subtree.
3. Recursively find the maximum depth of the right subtree.
4. Return the maximum of the left and right depths plus 1.

Iterative Approach:
1. If root is null, return 0.
2. Initialize a queue and enqueue the root node with depth 1.
3. Initialize a variable maxDepth to 0.
4. While the queue is not empty:
    Dequeue a node and its depth.
    Update maxDepth to the maximum of maxDepth and the current depth.
    If the node has a left child, enqueue the left child with depth + 1.
    If the node has a right child, enqueue the right child with depth + 1.
5. Return maxDepth.

*/

// Recursive Approach
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}

// Iterative Approach
// function maxDepth(root: TreeNode | null): number {
//     if (root === null) {
//         return 0;
//     }

//     let maxDepth = 0;
//     const queue: { node: TreeNode, depth: number }[] = [{ node: root, depth: 1 }];

//     while (queue.length > 0) {
//         const { node, depth } = queue.shift()!;
//         maxDepth = Math.max(maxDepth, depth);

//         if (node.left !== null) {
//             queue.push({ node: node.left, depth: depth + 1 });
//         }
//         if (node.right !== null) {
//             queue.push({ node: node.right, depth: depth + 1 });
//         }
//     }

//     return maxDepth;
// }