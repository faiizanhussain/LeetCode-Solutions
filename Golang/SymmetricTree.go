/*

Steps to solve the problem:

1. Define a helper function isMirror(t1, t2) that takes two nodes as input.
2. If both t1 and t2 are null, return true.
3. If one of t1 or t2 is null, return false.
4. If the values of t1 and t2 are not equal, return false.
5. Recursively check if t1.left is a mirror of t2.right and t1.right is a mirror of t2.left.
6. Return true if both recursive checks are true.
7. In the main function, call isMirror(root, root) and return the result.

*/

package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isSymmetric(root *TreeNode) bool {
	return isMirror(root, root)
}

func isMirror(t1, t2 *TreeNode) bool {
	if t1 == nil && t2 == nil {
		return true
	}
	if t1 == nil || t2 == nil {
		return false
	}
	return (t1.Val == t2.Val) && isMirror(t1.Left, t2.Right) && isMirror(t1.Right, t2.Left)
}

func main() {
	// Example usage
	root := &TreeNode{Val: 1}
	root.Left = &TreeNode{Val: 2}
	root.Right = &TreeNode{Val: 2}
	root.Left.Left = &TreeNode{Val: 3}
	root.Left.Right = &TreeNode{Val: 4}
	root.Right.Left = &TreeNode{Val: 4}
	root.Right.Right = &TreeNode{Val: 3}

	fmt.Println(isSymmetric(root)) // Output: true
}
