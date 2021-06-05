const generator = require('random-array-generator');
const A =  [9, 31, 28, 18, 27, 21, 19, 39, 11, 49, 22, 14, 7];

console.log('Expected::', A);

const PARENT = index => A[Math.ceil(index/2)- 1];
const LEFT_CHILD = index => ({ item: A[2*index + 1], index: 2*index + 1 });
const RIGHT_CHILD = index => ({ item: A[2*index + 2], index: 2*index + 2 });

let heapSize = A.length; // required if we want to sort, not required for Build max heap or heapify. But can be used by MAX_HEAPIFY  if is called indirectly from heapSort


const MAX_HEAPIFY = (A, i) => {
    let l = LEFT_CHILD(i);
    let r = RIGHT_CHILD(i);
    let index = i;
    let largest = A[i];
    if (l.item > largest && l.index <= heapSize -1 ) { largest = l.item; index = l.index }
    if (r.item > largest && r.index <= heapSize -1) { largest = r.item; index = r.index }
    
    let temp = A[i];
    A[i] = A[index];
    A[index] = temp;
    if (index === i) return;
    else return MAX_HEAPIFY(A, index)
    // Complexity: 
}

const BUILD_MAX_HEAP = (A) => {
    for(let i=Math.floor((A.length)/2 -1); i>=0; i--) {
        MAX_HEAPIFY(A, i);
    }
    
}

const heapSort = (A) => {
    BUILD_MAX_HEAP(A);

    // Following is not in place Sort
    // let a = [];
    // let l = A.length-1;
    // for (let i=0; i<l; i++) {
    //     a.unshift(A[0]);
    //     A[0] = A.pop();
    //     console.log(a, A);
    //     MAX_HEAPIFY(A, 0);
    // }

    // Following is in place Sort
    for (let i=A.length-1; i>=1; i--) {
        // interchange  last and root
        let temp = A[0];
        A[0] = A[heapSize-1];
        A[heapSize-1] = temp;

        heapSize--;
        MAX_HEAPIFY(A, 0);
    }

    return A;
}

console.log(heapSort(A));

// console.log(A);


