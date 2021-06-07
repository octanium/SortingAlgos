const A =  [9, 31, 28, 18, 27, 21, 19, 39, 11, 49, 22, 14, 7];

const selection = (a) => {
    for (let i=0; i<=A.length-1; i++) {
        for (let j=0; j<A.length-1; j++) {
            if (a[j+1] < a[j]) {
                let temp = A[j];
                A[j] = A[j+1];
                A[j+1] = temp;
            }
        }
        // console.log(a[i]);
    }
}
selection(A);
console.log(A);