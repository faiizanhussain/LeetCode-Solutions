function findScore(nums: number[]): number {
    let ans = 0;
    const sorted: [number, number][] = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        sorted[i] = [nums[i], i];
    }

    sorted.sort((a, b) => a[0] - b[0]);

    const marked: boolean[] = new Array(nums.length).fill(false);

    for (let i = 0; i < nums.length; i++) {
        const number = sorted[i][0];
        const index = sorted[i][1];
        if (!marked[index]) {
            ans += number;
            marked[index] = true;
            // mark adjacent elements if they exist
            if (index - 1 >= 0) {
                marked[index - 1] = true;
            }
            if (index + 1 < nums.length) {
                marked[index + 1] = true;
            }
        }
    }

    return ans;
}

// Example usage:
console.log(findScore([2, 1, 3, 4, 5, 2])); // Output: 7
console.log(findScore([2, 3, 5, 1, 3, 2])); // Output: 5
console.log(findScore([2, 5, 6, 6, 10])); // Output: 18