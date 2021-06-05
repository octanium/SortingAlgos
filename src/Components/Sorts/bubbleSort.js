const bubble = (size, array) => {

// Buuble Sort- Brute-Force Approach
const Stopwatch = require('statman-stopwatch');

const stopwatch = new Stopwatch();

stopwatch.start();
    let temp;
    for (let i=0; i < size; i++) {
        for (let j=i+1; j< size; j++) {
            if (array[j] <= array[i]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    stopwatch.stop();

// Time taken
console.log('Array size: ', size, 'Bubble Sort: Time consumed: ', stopwatch.read());
// Compare results

return stopwatch.read();

// Worst-time complexity O(n^2)
// Best-time complexity O(n^2)
// Average-time complexity O(n^2)
}

module.exports = { bubble };