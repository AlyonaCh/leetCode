// iven an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let check = arr.some(function(item, n) {
            if (i != n && item === arr[i] / 2) {
                return true;
            }
            return false;
        })
        if (check) {
            return true;
        }
        
    }
    return false;
};

// console.log(checkIfExist([10,2,5,3]));
// console.log(checkIfExist([7,1,14,11]));
// console.log(checkIfExist([3,1,7,11]));
console.log(checkIfExist([-2,0,10,-19,4,6,-8]));
console.log(checkIfExist([0,0]));