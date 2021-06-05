const generator = require('random-array-generator');
const array = generator.randomArray({min: 0, max: 100, elements: 10});
console.log(array);

const MergeSort = (A, p, r) => {
    if (p<r) {
        const q = Math.floor((p+r)/2);
        MergeSort(A, p, q);
        MergeSort(A, q+1, r);
        Merge(A, p, r);
    }
}

const Merge = (A, p, r) => {
    for (let i=p+1 ; i<r; i++) {
        let j=i-1;
        let key = A[i];
        while(key < A[j] && j>=p) {
            A[j+1] = A[j];
            j--;
        }
        A[j+1] = key;
    }
    console.log(A)
    return A;
}

MergeSort(array, 0, array.length);