/*

Steps to solve the problem:

Recursive Approach:
1. If root is null, return 0.
2. If root.left is null, return the minimum depth of the right subtree plus 1.
3. If root.right is null, return the minimum depth of the left subtree plus 1.
4. Return the minimum of the minimum depth of the left and right subtrees plus 1.

Iterative Approach:
1. If root is null, return 0.
2. Initialize a queue and enqueue the root node with depth 1.
3. While the queue is not empty:
    1. Dequeue a node and its depth.
    2. If the node is a leaf (both left and right children are null), return the current depth.
    3. If the node has a left child, enqueue the left child with depth + 1.
    4. If the node has a right child, enqueue the right child with depth + 1.

*/

// Recursive Approach
function recursiveMinDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }
    if (root.left === null) {
        return recursiveMinDepth(root.right) + 1;
    }
    if (root.right === null) {
        return recursiveMinDepth(root.left) + 1;
    }
    return Math.min(recursiveMinDepth(root.left), recursiveMinDepth(root.right)) + 1;
}

// Iterative Approach
function iterativeMinDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    const queue: { node: TreeNode, depth: number }[] = [{ node: root, depth: 1 }];

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!;

        if (node.left === null && node.right === null) {
            return depth;
        }

        if (node.left !== null) {
            queue.push({ node: node.left, depth: depth + 1 });
        }

        if (node.right !== null) {
            queue.push({ node: node.right, depth: depth + 1 });
        }
    }

    return 0;
}