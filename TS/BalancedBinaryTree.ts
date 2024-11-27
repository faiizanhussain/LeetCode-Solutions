/*
Steps to Solve Problem:

1. Define a helper function checkBalance(node) that returns a tuple (isBalanced, height).
2. If node is null, return (true, 0).
3. Recursively check the balance and height of the left subtree.
4. Recursively check the balance and height of the right subtree.
5. If either subtree is not balanced, return (false, 0).
6. If the absolute difference between the heights of the left and right subtrees is greater than 1, return (false, 0).
7. Return (true, max(leftHeight, rightHeight) + 1).
8. In the main function, call checkBalance(root) and return the isBalanced part of the result.

Explanation
The problem requires determining if a binary tree is height-balanced. A binary tree is height-balanced if the depth of the two subtrees of every node never differs by more than one.

Algorithm:

Helper Function:
- We define a helper function checkBalance(node) that returns a tuple (isBalanced, height).
- If the input node is null, it means we have reached a leaf node, and we return (true, 0).

Recursion:
- We recursively check the balance and height of the left subtree by calling checkBalance(node.left).
- We recursively check the balance and height of the right subtree by calling checkBalance(node.right).

Checking Balance:
- If either the left or right subtree is not balanced, we return (false, 0).
- If the absolute difference between the heights of the left and right subtrees is greater than 1, it means the current node is not balanced, and we return (false, 0).

Returning Result:
- If the current node is balanced, we return (true, max(leftHeight, rightHeight) + 1) to indicate that the subtree rooted at the current node is balanced and its height.

Main Function:
- In the main function isBalanced(root), we call checkBalance(root) and return the isBalanced part of the result.
*/

function isBalanced(root: TreeNode | null): boolean {
    function checkBalance(node: TreeNode | null): [boolean, number] {
        if (node === null) {
            return [true, 0];
        }

        const [leftBalanced, leftHeight] = checkBalance(node.left);
        const [rightBalanced, rightHeight] = checkBalance(node.right);

        if (!leftBalanced || !rightBalanced) {
            return [false, 0]; 
        }

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return [false, 0];
        }

        return [true, Math.max(leftHeight, rightHeight) + 1];
    }

    return checkBalance(root)[0];
}
