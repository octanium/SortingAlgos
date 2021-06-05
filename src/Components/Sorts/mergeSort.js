
const merge = (size, array) => {

    // Buuble Sort- Brute-Force Approach
    const Stopwatch = require('statman-stopwatch');
    
    const stopwatch = new Stopwatch();

    stopwatch.start();
    MergeSort(array, 0, size-1);
    stopwatch.stop();
    
    // Time taken
    console.log('Array size: ', size, 'Merge Sort: Time consumed: ', stopwatch.read());
    // Compare results
    
    return stopwatch.read();

    }

    const MergeSort = (A, p, r) => {
        if (p<r) {
            const q = Math.floor((p+r)/2);
            MergeSort(A, p, q);
            MergeSort(A, q+1, r);
            return Merge(A, p, q, r);
        }
    }

    const Merge = (A, p, q, r) => {
        const n1 = q-p+1;
        const n2 = r-q;
        const L = [];
        const R = [];
        for(let i=0; i<n1; i++) L[i] = A[p+i];
        for(let j=0; j<n2; j++) R[j] = A[q+j+1];
        L[n1] = Number.POSITIVE_INFINITY;
        R[n2] = Number.POSITIVE_INFINITY;
        let i=0, j=0;
        for(let k=p; k<=r; k++){
            if (L[i] <= R[j]) { A[k] = L[i]; i++; }
            else { A[k] = R[j]; j++; }
        }
        return A;
    }
    
    module.exports = { merge };