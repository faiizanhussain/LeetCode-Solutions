/*

Steps to solve the Problem:
1. Define a helper function sortedArrayToBSTHelper(start, end) that takes the start and end indices of the current subarray.
2. If start is greater than end, return null.
3. Calculate the middle index mid as (start + end) // 2.
4. Create a new TreeNode with the value nums[mid].
5. Recursively set the left child of the node to sortedArrayToBSTHelper(start, mid - 1).
6. Recursively set the right child of the node to sortedArrayToBSTHelper(mid + 1, end).
7. Return the node.
8. In the main function, call sortedArrayToBSTHelper(0, nums.length - 1) and return the result.

Algorithm:

Helper Function:
- We define a helper function sortedArrayToBSTHelper(start, end) that takes the start and end indices of the current subarray.
- If start is greater than end, it means the subarray is empty, and we return null.

Middle Element as Root:
- We calculate the middle index mid of the current subarray using the formula (start + end) // 2.
- We create a new TreeNode with the value nums[mid]. This node will be the root of the current subtree.

Recursive Construction:
- We recursively set the left child of the node to the result of sortedArrayToBSTHelper(start, mid - 1). This constructs the left subtree using the left half of the current subarray.
- We recursively set the right child of the node to the result of sortedArrayToBSTHelper(mid + 1, end). This constructs the right subtree using the right half of the current subarray.

Return the Result:
- In the main function, we call sortedArrayToBSTHelper(0, nums.length - 1) to start the construction from the entire array and return the result.

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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    function sortedArrayToBSTHelper(start: number, end: number): TreeNode | null {
        if (start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(nums[mid]);
        node.left = sortedArrayToBSTHelper(start, mid - 1);
        node.right = sortedArrayToBSTHelper(mid + 1, end);
        return node;
    }

    return sortedArrayToBSTHelper(0, nums.length - 1);
}