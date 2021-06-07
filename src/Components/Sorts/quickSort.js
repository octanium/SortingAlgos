const Ar =  [9, 31, 28, 18, 27, 21, 19, 39, 11, 49, 22, 14, 7];

const PARTITION = (A, p, r) => {
    x = A[r]; // x = Pivot Element
    let i = p-1;
    for (let j = p; j<= r-1; j++) {
        if (A[j] < x) {
            // console.log('A[]::', A[j]);
            i++;
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
        // Termination: Replace i+1 element with r

    }
    let temp = A[r];
    A[r] = A[i+1];
    A[i+1] = temp;
    return i+1;
}

const quick = (A, p, r) => {
    if(p<r) {
        q = PARTITION(A, p, r);
        quick(A, p, q-1);
        quick(A, q+1, r);
    }
}
quick(Ar, 0, Ar.length-1);
console.log(Ar);


