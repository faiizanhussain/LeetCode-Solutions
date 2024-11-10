import { mergeTwoLists } from './mergeSortedLists';

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

function arrayToList(arr: number[]): ListNode | null {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

test('merges two sorted lists', () => {
    expect(mergeTwoLists(arrayToList([1, 2, 4]), arrayToList([1, 3, 4]))).toEqual(arrayToList([1, 1, 2, 3, 4, 4]));
    expect(mergeTwoLists(arrayToList([]), arrayToList([0]))).toEqual(arrayToList([0]));
    expect(mergeTwoLists(arrayToList([]), arrayToList([]))).toEqual(arrayToList([]));
    expect(mergeTwoLists(arrayToList([1, 2, 3]), arrayToList([4, 5, 6]))).toEqual(arrayToList([1, 2, 3, 4, 5, 6]));
});