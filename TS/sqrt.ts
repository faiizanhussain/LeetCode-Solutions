/*

Steps to solve the problem:

1. If x is 0 or 1, return x.
2. Initialize two pointers, left to 1 and right to x.
3. While left is less than or equal to right:
4. Calculate the middle index mid as (left + right) // 2.
    If mid * mid is equal to x, return mid.
    If mid * mid is less than x, move the left pointer to mid + 1.
    If mid * mid is greater than x, move the right pointer to mid - 1.
5. Return right as the integer part of the square root.

Technical Explanation
The problem requires finding the square root of a non-negative integer x and returning the integer part of the square root, rounded down. The solution must not use any built-in exponent function or operator.

Algorithm:

Edge Cases:
    If x is 0 or 1, the square root is x itself. We handle these cases separately by returning x.

Binary Search:
    We use a binary search algorithm to find the integer part of the square root. This is efficient with a time complexity of O(log n).
    We initialize two pointers, left to 1 and right to x. These pointers represent the current search range for the square root.

Binary Search Loop:
    We enter a loop that continues as long as left is less than or equal to right.
    Within the loop, we calculate the middle index mid using the formula (left + right) // 2.
    We then compare mid * mid with x:
        If mid * mid is equal to x, we have found the exact square root, and we return mid.
        If mid * mid is less than x, it means the square root is greater than mid, so we move the left pointer to mid + 1.
        If mid * mid is greater than x, it means the square root is less than mid, so we move the right pointer to mid - 1.

Return the Result:
    After the loop terminates, the right pointer will be at the largest integer whose square is less than or equal to x. Therefore, we return right as the integer part of the square root.
    This algorithm efficiently finds the integer part of the square root with a time complexity of O(log n) and a space complexity of O(1).

*/

function mySqrt(x: number): number {
    if (x === 0 || x === 1) {
        return x;
    }

    let left = 1;
    let right = x;
    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
            result = mid;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

// Example usage
console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(8)); // Output: 2
console.log(mySqrt(9)); // Output: 3
