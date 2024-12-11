/**
 * Calculates the maximum beauty of an array after applying operations
 * @param nums - Array of integers to process
 * @param k - Maximum change allowed for each number
 * @returns The maximum number of elements that can be made equal
 * 
 * Algorithm:
 * 1. Sort array to handle numbers sequentially
 * 2. Use sliding window technique with two pointers
 * 3. Right pointer expands window, left pointer shrinks when difference exceeds 2*k
 * 4. Track maximum window size as the beauty value
 */
function maximumBeauty(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let left = 0;
    let maxBeauty = 0;
  
    for (let right = 0; right < nums.length; right++) {
      while (nums[right] - nums[left] > 2 * k) {
        left++;
      }
      maxBeauty = Math.max(maxBeauty, right - left + 1);
    }
  
    return maxBeauty;
  };