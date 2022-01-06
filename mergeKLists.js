// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
 var mergeKLists = function(lists) {
    let list = [];
    let head = null;
    let length = 0;

    if (lists.length === 0) {
        return null;
    }

    for (let n = 0; n < lists.length; n++) {
        let current = lists[n];
        if (current === null || current.length === 0) {
            continue;
        }
        while (true) {
            list.push(current.val);
            if (current.next === null) {
                break;
            }
            current = current.next;
            
        }
    }

    list.sort(function(a, b) {
        return a - b;
    });
    
    for (let i = 0; i < list.length; i++) {
        let value = list[i];
        let node = new ListNode(value);
        if (length === 0) {
            head = node; 
        } else {
            let current = head;
            while (true) {
                if (current.next === null) {
                    current.next = node;
                    break;
                }
                current = current.next;
            }
        }
        length++;
    }
    
    return head;
};

console.log(mergeKLists([{"val":1,"next":{"val":4,"next":{"val":5,"next":null}}},{"val":1,"next":{"val":3,"next":{"val":4,"next":null}}},{"val":2,"next":{"val":6,"next":null}}]
));
console.log(mergeKLists([[], new ListNode(0)]));
console.log(mergeKLists([]));
console.log(mergeKLists([[]]));