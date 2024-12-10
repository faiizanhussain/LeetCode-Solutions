/*

Steps to solve this problem:

1. Create a function that takes in a number and returns a 2D array of that size.
2. Loop through the array and fill in the values.
3. Return the array.

*/

function generate(numRows: number): number[][] {
    const triangle: number[][] = [];

    for (let i = 0; i < numRows; i++) {
        const row: number[] = new Array(i + 1).fill(1);

        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle.push(row);
    }

    return triangle;
}

// Example usage:
console.log(generate(5)); // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // Output: [[1]]