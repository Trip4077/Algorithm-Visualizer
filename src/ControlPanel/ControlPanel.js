import React from 'react';

import {
    mergesort,
    bubblesort,
    selectionsort,
    insertionsort,
    quicksort
} from '../Algorithms';

export default ({ reset, values }) => {
    return(
        <div className="controls">
            <button onClick={reset}>Reset Values</button>
            <button onClick={() => mergesort(values)}>Merge Sort</button>
            <button onClick={() => bubblesort(values)}>Bubble Sort</button>
            <button onClick={() =>selectionsort(values)}>Selection Sort</button>
            <button onClick={() => insertionsort(values)}>Insertion Sort</button>
            <button onClick={() =>  quicksort(values)}>Quick Sort</button>
        </div>
    )
}