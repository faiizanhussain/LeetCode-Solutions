/*

Steps to solve the problem:

Recursive Approach:
    1. Define a helper function inorder(node) that takes a node as input.
    2. If node is null, return.
    3. Recursively call inorder(node.left).
    4. Append node.val to the result list.
    5. Recursively call inorder(node.right).
    6. Initialize an empty list result and call inorder(root).
    7. Return result.

Iterative Approach:
    1. Initialize an empty list result to store the inorder traversal.
    2. Initialize a stack to keep track of the nodes during traversal.
    3. Initialize a pointer current to the root node.
    4. While the stack is not empty or current is not null:
        - While current is not null, push current to the stack and move current to its left child.
        - If current is null, pop the top node from the stack, append its value to the result list, and move current to its right child.
    5. Return the result list.

Technical Explanation
The problem requires performing an inorder traversal of a binary tree and returning the values in a list. The inorder traversal visits the nodes in the order left, root, right.

Recursive Approach:
    Helper Function:
        - We define a helper function inorder(node) that performs the inorder traversal.
        - If the input node is null, we return immediately.
        - We recursively call inorder(node.left) to traverse the left subtree.
        - We append the value of the current node node.val to the result list.
        - We recursively call inorder(node.right) to traverse the right subtree.

    Initialization and Invocation:
        - We initialize an empty list result to store the traversal result.
        - We call the helper function inorder(root) to start the traversal from the root of the tree.
        - Finally, we return the result list.

Iterative Approach:
    Initialization:
        - We initialize an empty list result to store the traversal result.
        - We initialize an empty stack stack to help with the traversal.
        - We initialize a pointer current to the root of the tree.
    
    Traversal Loop:
        - We enter a loop that continues as long as current is not null or stack is not empty.
        - Within the loop, we first traverse the left subtree:
        - While current is not null, we push current onto the stack and move current to current.left.
        - After reaching the leftmost node, we pop an element from the stack and set it to current.
        - We append the value of current to the result list.
        - We then move current to current.right to traverse the right subtree.
    
    Return the Result:
    After the loop terminates, we return the result list, which contains the inorder traversal of the tree.
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

function recursiveInorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    
    function inorder(node: TreeNode | null) {
        if (node === null) {
            return;
        }
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    }
    
    inorder(root);
    return result;
}


// Iterative Approach
function iterativeInorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;
    
    while (current !== null || stack.length > 0) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop()!;
        result.push(current.val);
        current = current.right;
    }
    
    return result;
}