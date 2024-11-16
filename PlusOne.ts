/*
Steps to solve the problem:
1. Iterate through the array digits from the last element to the first element.
For each element:
2. If the current digit is less than 9, increment the digit by 1 and return the array digits.
3. If the current digit is 9, set the digit to 0.
4. If all digits were 9, prepend 1 to the array digits.
5. Return the array digits.

Technical Explanation

The problem requires incrementing a large integer represented as an array of digits by one. The digits are ordered from the most significant to the least significant, and there are no leading zeros. The solution should handle cases where the increment causes a carry-over, such as turning [9] into [1, 0].

Algorithm:

Iteration from the End:

We start iterating from the last element of the array (the least significant digit) towards the first element (the most significant digit).
This is because adding one to the least significant digit is the simplest case, and any carry-over will propagate towards the more significant digits.
Increment and Carry-Over:

For each digit, we check if it is less than 9. If it is, we simply increment the digit by one and return the array. This is because there is no carry-over in this case.
If the digit is 9, we set it to 0 and continue to the next digit. This is because adding one to 9 results in 10, which means we set the current digit to 0 and carry over 1 to the next more significant digit.

Handling All 9s:

If we finish the loop and all digits were 9, the array will be filled with zeros. In this case, we need to prepend 1 to the array to account for the carry-over that propagated through all digits. For example, [9, 9, 9] becomes [1, 0, 0, 0].
Return the Result:

Finally, we return the modified array digits, which now represents the incremented integer.
This algorithm efficiently handles the increment operation with a time complexity of O(n), where n is the length of the array, and a space complexity of O(1) for in-place modification, except for the case where we need to prepend a digit, which requires O(n) additional space.

*/

function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    
    // If we get here, it means all digits were 9
    digits.unshift(1);
    return digits;
}

// Example usage
console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2]