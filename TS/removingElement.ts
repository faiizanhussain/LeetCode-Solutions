function removeElement(nums: number[], val: number): number {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

// Example usage:
const nums1 = [3, 2, 2, 3];
const val1 = 3;
const k1 = removeElement(nums1, val1);
console.log(k1, nums1); // Output: 2, [2, 2, 2, 3]

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;
const k2 = removeElement(nums2, val2);
console.log(k2, nums2); // Output: 5, [0, 1, 3, 0, 4, 0, 4, 2]