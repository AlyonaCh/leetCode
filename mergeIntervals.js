// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort(function(a, b) {
        return a[0] - b[0];
    })
    for (let i = 0; i < intervals.length; i++) {
        if (i != intervals.length - 1) {
            let item = intervals[i];
            let newArr = [];
            let other = intervals[i+1];
            if (other[0] >= item[0] && other[0] <= item[1]) {
                newArr = item.concat(other).sort(function(a, b) {
                    return a - b;
                });
                intervals.splice(i, 2, [newArr[0], newArr[newArr.length - 1]])
                i = i - 1;
            }
            
        }
        
    }
    return intervals;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log([[1,6],[8,10],[15,18]])
console.log(merge([[1,4],[4,5]]))
console.log([[1,5]])
console.log(merge([[1,4],[0,5]]))
console.log([[0,5]])
console.log(merge([[1,4],[0,2],[3,5]]))
console.log([[0,5]])
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))
console.log([[1,10]])
console.log(merge([[2,3],[5,5],[2,2],[3,4],[3,4]]))
console.log([[[2,4],[5,5]]])
