import { bubble } from './bubbleSort';
import { insertion } from './insertionSort';
import { selection } from './selectionSort';
import { merge } from './mergeSort';
import React from 'react';


const generate = (selected, limit, slot) => {

    const min = 0;
    limit = parseInt(limit);
    slot = parseInt(slot);
    const max = slot*10;
    const generator = require('random-array-generator');
    const algoMap = {
        bubble,
        insertion,
        selection,
        merge,
    };

    const data = {};

    Object.keys(selected).forEach((algo) => { data[algo] = [{x: 0, y: 0}] })

    let originalArray = [];

    while(originalArray.length <= limit) {
        const array = generator.randomArray({min, max, elements: slot});
        originalArray = [...originalArray, ...array];
        for (let algo in selected) {
            const time = algoMap[algo](originalArray.length, [...originalArray]);
            data[algo].push({ x: originalArray.length, y: time });
        }
    }
    return data;
}

export default generate;