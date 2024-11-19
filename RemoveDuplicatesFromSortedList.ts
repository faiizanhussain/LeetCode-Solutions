/*

Steps to solve the problem:

1. If head is null, return head.
2. Initialize a pointer current to head.
3. While current is not null and current.next is not null:
    - If current.val is equal to current.next.val, set current.next to current.next.next to remove the duplicate.
    - Otherwise, move current to current.next.
4. Return head.

Technical Explanation
The problem requires removing duplicates from a sorted linked list such that each element appears only once. The list should remain sorted after removing duplicates.

Algorithm:

Edge Case:
    If the head is null, it means the list is empty, and we return head as there are no duplicates to remove.

Pointer Initialization:
    We initialize a pointer current to the head of the linked list. This pointer will be used to traverse the list.

Traversal and Removal of Duplicates:
    - We enter a loop that continues as long as current is not null and current.next is not null. This ensures that we process all nodes in the list.
    - Within the loop, we check if the value of the current node (current.val) is equal to the value of the next node (current.next.val):
        - If they are equal, it means there is a duplicate. We remove the duplicate by setting current.next to current.next.next. This effectively skips the duplicate node and links the current node to the node after the duplicate.
        - If they are not equal, we move the current pointer to current.next to continue checking the next nodes.

Return the Result:
    After the loop terminates, we return the head of the modified linked list, which now contains no duplicates.

This algorithm efficiently removes duplicates from the sorted linked list with a time complexity of O(n) and a space complexity of O(1).

*/

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null) {
        return head;
    }

    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
}

// Example usage
const node1 = new ListNode(1);
const node2 = new ListNode(1);
const node3 = new ListNode(2);
node1.next = node2;
node2.next = node3;

const result = deleteDuplicates(node1);
let current = result;

while (current !== null) {
    console.log(current.val);
    current = current.next;
}

