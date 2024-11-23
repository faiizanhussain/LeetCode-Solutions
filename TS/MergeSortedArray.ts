/*

Steps to solve the problem:
1. Initialize three pointers: p1 to m - 1 (end of the valid elements in nums1), p2 to n - 1 (end of nums2), and p to m + n - 1 (end of nums1).
2. While p1 and p2 are both greater than or equal to 0:
    - If nums1[p1] is greater than nums2[p2], set nums1[p] to nums1[p1] and decrement p1.
    - Otherwise, set nums1[p] to nums2[p2] and decrement p2.
    - Decrement p.
3. If p2 is still greater than or equal to 0, copy the remaining elements from nums2 to nums1.
4. No need to copy remaining elements from nums1 as they are already in place.

Technical Explanation
The problem requires merging two sorted arrays nums1 and nums2 into a single sorted array. The merged array should be stored inside nums1, which has enough space to accommodate the elements from both arrays. The solution must run in O(m + n) time complexity.

Algorithm:

1. Pointer Initialization:
    - We initialize three pointers: p1 to m - 1 (pointing to the last valid element in nums1), p2 to n - 1 (pointing to the last element in nums2), and p to m + n - 1 (pointing to the last position in nums1).

2. Merging in Reverse Order:
    - We iterate while both p1 and p2 are greater than or equal to 0. This ensures that we process all elements from both arrays.
    - In each iteration, we compare the elements pointed to by p1 and p2:
        - If nums1[p1] is greater than nums2[p2], we place nums1[p1] at position p in nums1 and decrement p1.
        - Otherwise, we place nums2[p2] at position p in nums1 and decrement p2.
        - We then decrement p to move to the next position.

3. Copy Remaining Elements:
    - If p2 is still greater than or equal to 0 after the loop, it means there are remaining elements in nums2 that need to be copied to nums1. We copy these elements directly.
    - There is no need to copy remaining elements from nums1 as they are already in place.

This algorithm efficiently merges the two arrays in O(m + n) time complexity and uses O(1) additional space.

*/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p--;
        p2--;
    }
}

// Example Usage
const array1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const array2 = [2, 5, 6];
const n = 3;

merge(array1, m, array2, n);