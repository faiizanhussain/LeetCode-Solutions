export function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let k = 1; // Start with the first element as unique
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

// Example usage:
const nums1 = [1, 1, 2];
const k1 = removeDuplicates(nums1);
console.log(k1, nums1.slice(0, k1)); // Output: 2, [1, 2]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(nums2);
console.log(k2, nums2.slice(0, k2)); // Output: 5, [0, 1, 2, 3, 4]