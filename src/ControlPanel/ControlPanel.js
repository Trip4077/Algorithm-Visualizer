import React from 'react';

import {
    mergesort,
    bubblesort,
    selectionsort,
    insertionsort,
    quicksort
} from '../Algorithms';

import './ControlPanel.css';

export default ({ reset, values }) => {
    return(
        <div className="controls">
            <div style={{ marginTop: '30px' }}>
                <button className='btn' onClick={reset}>Reset Values</button>
                <button className='btn' onClick={() => mergesort(values)}>Merge Sort</button>
                <button className='btn' onClick={() => bubblesort(values)}>Bubble Sort</button>
                <button className='btn' onClick={() =>selectionsort(values)}>Selection Sort</button>
                <button className='btn' onClick={() => insertionsort(values)}>Insertion Sort</button>
                {/* <button className='btn' onClick={() =>  quicksort(values)}>Quick Sort</button> */}
            </div>
        </div>
    )
}