const generator = require('random-array-generator');
const array = generator.randomArray({min: 0, max: 100, elements: 10});

insertion = (A, j) => {
    if (j > A.length-1) return A;
    let i=j-1;
    let key  = A[j];
    while(key < A[i] && i>=0) {
        A[i+1] = A[i];
        i--;
    }
    A[i+1] = key;
    return insertion(A, ++j);
}

const sorted = insertion(array, 1);
console.log(sorted);



