/*

Plan
1. Define TreeNode class
2. Implement recursive solution:
    1. Base case: empty tree
    2. Base case: leaf node - check if remaining sum equals node value
    3. Recursive case: check both subtrees with remaining sum
3. Add test cases

*/

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // Empty tree
    if (root === null) {
        return false;
    }
    
    // Leaf node
    if (root.left === null && root.right === null) {
        return root.val === targetSum;
    }
    
    // Check both subtrees with remaining sum
    return hasPathSum(root.left, targetSum - root.val) || 
           hasPathSum(root.right, targetSum - root.val);
}

// Test cases
function testing() {
    // Test case 1: [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
    const root1 = new TreeNode(5);
    root1.left = new TreeNode(4);
    root1.right = new TreeNode(8);
    root1.left.left = new TreeNode(11);
    root1.left.left.left = new TreeNode(7);
    root1.left.left.right = new TreeNode(2);
    root1.right.left = new TreeNode(13);
    root1.right.right = new TreeNode(4);
    root1.right.right.right = new TreeNode(1);
    
    console.log(hasPathSum(root1, 22)); // Expected: true
    
    // Test case 2: [1,2,3], targetSum = 5
    const root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(3);
    
    console.log(hasPathSum(root2, 5)); // Expected: false
    
    // Test case 3: [], targetSum = 0
    console.log(hasPathSum(null, 0)); // Expected: false
}

testing();