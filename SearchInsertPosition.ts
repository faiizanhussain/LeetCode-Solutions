/*
Pseudocode
Initialize two pointers, left and right, to the start and end of the array respectively.
While left is less than or equal to right:
Calculate the middle index mid as (left + right) // 2.
If nums[mid] is equal to the target, return mid.
If nums[mid] is less than the target, move the left pointer to mid + 1.
If nums[mid] is greater than the target, move the right pointer to mid - 1.
If the target is not found, return left as the insertion index.
Technical Explanation
The problem requires finding the index of a target value in a sorted array of distinct integers. If the target is not found, we need to return the index where it would be inserted to maintain the sorted order. The solution must have a runtime complexity of O(log n), which suggests using a binary search algorithm.

Binary Search Algorithm:

Initialization:

We start by initializing two pointers, left and right, which represent the current search range within the array. Initially, left is set to the start of the array (index 0), and right is set to the end of the array (index n-1).
Binary Search Loop:

We enter a loop that continues as long as left is less than or equal to right.
Within the loop, we calculate the middle index mid using the formula (left + right) // 2. This gives us the index of the middle element in the current search range.
We then compare the middle element nums[mid] with the target value:
If nums[mid] is equal to the target, we have found the target, and we return the index mid.
If nums[mid] is less than the target, it means the target must be in the right half of the current search range. Therefore, we move the left pointer to mid + 1.
If nums[mid] is greater than the target, it means the target must be in the left half of the current search range. Therefore, we move the right pointer to mid - 1.
Insertion Index:

If the loop terminates without finding the target, the left pointer will be at the position where the target should be inserted to maintain the sorted order. Therefore, we return left as the insertion index.
This algorithm efficiently narrows down the search range by half in each iteration, resulting in a logarithmic time complexity of O(log n).
*/


function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};