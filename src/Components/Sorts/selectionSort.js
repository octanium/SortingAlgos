const selection = (size, array) => {

    const Stopwatch = require('statman-stopwatch');
    
    const stopwatch = new Stopwatch();
    
    stopwatch.start();
    for (let i=0; i<size-1; i++) {
        let smallest = i;
        for (let j=i+1; j<size; j++) {
            if (array[j] < array[smallest]) smallest = j;
        }
        let temp = array[smallest];
        array[smallest] = array[i];
        array[i] = temp;
    }        
    stopwatch.stop();
        
    // Time taken
    console.log('Array size: ', size, 'Selection Sort: Time consumed: ', stopwatch.read());
    
    return stopwatch.read();
    }
    
    module.exports = { selection };