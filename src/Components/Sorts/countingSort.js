const A =  [9, 31, 28, 18, 27, 21, 19, 39, 11, 49, 22, 14, 7];
const B = [];
const C = [];

const counting = (a) => {
    for (let i=0; i<=49; i++) B[i] = 0; // k=49
    for (let i=0; i<a.length; i++) B[A[i]] +=1;
    for (let i=1; i<=49; i++) B[i] = B[i] + B[i-1];
    for (let i=0; i<A.length; i++) {
        C[B[A[i]]] = A[i];
        B[A[i]]--;
    }
    C.shift();
}
counting(A);
console.log(C);