import { removeDuplicates } from './removeDupesFromSortedList';


describe('removeDuplicates', () => {
    it('should return 0 for an empty array', () => {
        const nums: number[] = [];
        const result = removeDuplicates(nums);
        expect(result).toBe(0);
        expect(nums.slice(0, result)).toEqual([]);
    });

    it('should remove duplicates from a sorted array', () => {
        const nums = [1, 1, 2];
        const result = removeDuplicates(nums);
        expect(result).toBe(2);
        expect(nums.slice(0, result)).toEqual([1, 2]);
    });

    it('should handle arrays with no duplicates', () => {
        const nums = [1, 2, 3];
        const result = removeDuplicates(nums);
        expect(result).toBe(3);
        expect(nums.slice(0, result)).toEqual([1, 2, 3]);
    });

    it('should handle arrays with multiple duplicates', () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const result = removeDuplicates(nums);
        expect(result).toBe(5);
        expect(nums.slice(0, result)).toEqual([0, 1, 2, 3, 4]);
    });

    it('should handle arrays with all elements the same', () => {
        const nums = [1, 1, 1, 1, 1];
        const result = removeDuplicates(nums);
        expect(result).toBe(1);
        expect(nums.slice(0, result)).toEqual([1]);
    });
});