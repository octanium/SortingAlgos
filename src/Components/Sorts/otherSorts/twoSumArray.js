const generator = require('random-array-generator');
const array = generator.randomArray({min: 0, max: 100, elements: 10});

// const sumBrute = (A, x) => { // O(n2)
//     console.log(A, x)
//     for(let i=0; i<A.length; i++) {
//         for (let j=0; j<A.length && j != i; j++) {
//             if (A[i]+A[j] === x) return true;
//         }
//     }
//     return false;
// }

const sumUsingMerge = (S) => { // O(nlgn) + O(n) => O(nlgn)
    // sort using merge O(nlgn)
    const sorted = S.sort((a,b) => a-b);
    const x = sorted[4] + sorted[7];
    let j = sorted.length-1;
    let i=0;
    console.log(sorted, x, j, sorted.length);
    for (k=0;k<sorted.length;k++){
        if ((sorted[i] + sorted[j]) == x) return true;
        else if ((sorted[i] + sorted[j]) > x) --j;
        else if ((sorted[i] + sorted[j]) < x) ++i;
    }
    return false;
};

// console.log(sumBrute(array, xx));
console.log(sumUsingMerge(array));