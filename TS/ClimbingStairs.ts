/*

Steps to solve the problem:

1. If n is 1, return 1.
2. Initialize two variables, first to 1 and second to 2.
3.For each step from 3 to n:
    - Calculate the number of ways to reach the current step as first + second.
    - Update first to second.
    - Update second to the calculated number of ways.
4. Return second.

Technical Explanation
The problem requires finding the number of distinct ways to climb a staircase with n steps, where each time you can either climb 1 or 2 steps. This is a classic dynamic programming problem that can be solved using a bottom-up approach.

Algorithm:

Base Cases:
    If n is 1, there is only one way to climb the staircase, which is taking one step. We handle this case separately by returning 1.

Dynamic Programming Approach:
    We use two variables, first and second, to store the number of ways to reach the previous two steps. Initially, first is set to 1 (one way to reach the first step) and second is set to 2 (two ways to reach the second step).

Iterative Calculation:
    We iterate from step 3 to n. For each step, we calculate the number of ways to reach the current step as the sum of the number of ways to reach the previous two steps (first + second). This is because you can reach the current step either from the previous step (1 step) or from the step before the previous step (2 steps).
    We then update first to second and second to the calculated number of ways. This effectively shifts our window of the last two steps forward.

Return the Result:
    After the loop terminates, second will contain the number of ways to reach the nth step. We return second as the result.

    This algorithm efficiently calculates the number of ways to climb the staircase with a time complexity of O(n) and a space complexity of O(1).

*/

function climbStairs(n: number): number {
    if (n === 1) {
        return 1;
    }

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        const ways = first + second;
        first = second;
        second = ways;
    }

    return second;
}

// Example usage
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(4)); // Output: 5