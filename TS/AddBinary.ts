/*

Steps to solve the problem:
1. Initialize an empty string result to store the sum.
2. Initialize two pointers i and j to the end of strings a and b respectively.
3. Initialize a variable carry to 0.
4. While i or j is greater than or equal to 0, or carry is not 0:
5. Initialize sum to carry.
    If i is greater than or equal to 0, add the integer value of a[i] to sum and decrement i.
    If j is greater than or equal to 0, add the integer value of b[j] to sum and decrement j.
6. Append the remainder of sum divided by 2 to the front of result.
7. Update carry to the integer division of sum by 2.
8. Return result.

Technical Explanation
The problem requires adding two binary strings and returning their sum as a binary string. The binary strings consist only of '0' and '1' characters and do not contain leading zeros except for the zero itself.

Algorithm:

Initialization:
    We initialize an empty string result to store the sum of the binary strings.
    We also initialize two pointers i and j to the end of strings a and b respectively, and a variable carry to 0 to handle carry-over during addition.

Addition Loop:
    We enter a loop that continues as long as either i or j is greater than or equal to 0, or carry is not 0. This ensures that we process all digits of both strings and any remaining carry-over.
    Within the loop, we initialize sum to the current value of carry.
        If i is greater than or equal to 0, we add the integer value of a[i] to sum and decrement i.
        If j is greater than or equal to 0, we add the integer value of b[j] to sum and decrement j.
    We then append the remainder of sum divided by 2 to the front of result. This gives us the current digit of the binary sum.
    We update carry to the integer division of sum by 2, which gives us the carry-over for the next iteration.

Return the Result:
    After the loop terminates, we return the result string, which now contains the sum of the binary strings a and b.
    This algorithm efficiently handles the addition of two binary strings with a time complexity of O(n), where n is the length of the longer string, and a space complexity of O(n) for storing the result.

*/

function addBinary(a: string, b: string): string {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) {
      sum += parseInt(a[i], 2);
      i--;
    }
    if (j >= 0) {
      sum += parseInt(b[j], 2);
      j--;
    }
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  return result;
}

// Example usage
console.log(addBinary("11", "1")); // Output: '100'
console.log(addBinary("1010", "1011")); // Output: '10101'
console.log(addBinary("0", "0")); // Output: '0'
