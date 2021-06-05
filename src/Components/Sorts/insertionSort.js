const insertion = (size, array) => {

    // Buuble Sort- Brute-Force Approach
    const Stopwatch = require('statman-stopwatch');
    
    const stopwatch = new Stopwatch();

    stopwatch.start();
    for (let i=1; i < size; i++) {
        let key = array[i];
        let j = i-1;
        while(j>=0 && array[j] >= key){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = key
        }
    stopwatch.stop();    
    // Time taken
    console.log('Array size: ', size, 'insertion Sort: Time consumed: ', stopwatch.read());
    // Compare results
    
    return stopwatch.read();
    
    // Worst-time complexity O(n^2)
    // Best-time complexity O(n^2)
    // Average-time complexity O(n^2)
    }
    
    module.exports = { insertion };