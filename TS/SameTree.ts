/*

Steps to sovle the problem:

- If both p and q are null, return true.
- If one of p or q is null, return false.
- If the values of p and q are not equal, return false.
- Recursively check if the left subtrees of p and q are the same.
- Recursively check if the right subtrees of p and q are the same.
- Return true if both left and right subtree checks are true.


Technical Explanation
The problem requires checking if two binary trees are the same. Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Algorithm:

Base Cases:
    If both p and q are null, it means both trees are empty, and hence they are the same. We return true.
    If one of p or q is null, it means one tree is empty and the other is not, so they are not the same. We return false.
    If the values of p and q are not equal, it means the nodes have different values, so the trees are not the same. We return false.

Recursive Checks:
    We recursively check if the left subtrees of p and q are the same by calling the function with p.left and q.left.
    We recursively check if the right subtrees of p and q are the same by calling the function with p.right and q.right.

Return the Result:
We return true if both the left and right subtree checks are true. This means both subtrees are structurally identical and have the same values.

*/

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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}