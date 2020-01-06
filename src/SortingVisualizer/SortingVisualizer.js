import React, { useState, useEffect } from 'react';
import ControlPanel from '../ControlPanel/ControlPanel';

import './SortingVisualizer.css';

const SortingVisualizer = () => {
    const [ array, setArray ] = useState([]);

    /* Generate Random Integar Between Two Values */
    const randomIntFromInterval = (min, max) => {
        return Math.floor( Math.random() * (max - min + 1) + min )
    }

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    /* Generate 100 New Integars For Array */
    const resetArray = () => {
        const values = []
        const bars = document.getElementsByClassName('bar');

        for( let i = 0; i < bars.length; i++ ) {
            bars[i].style.backgroundColor = 'darkslategrey';
        }

        for( let i = 1; i < 351; i++ ) {
            values.push(i);
        }

        const shuffled = shuffle(values)

        setArray(shuffled);
    }

    useEffect(() => {
        resetArray()
    }, [])

    return(
        <>
            <div className="chart">
                {
                    array.map((value, index) => {
                        return (
                            <div className="bar" 
                                style={{ height: `${value}px` }}
                                key={index} 
                            />
                        )
                    })
                }
            </div>
            <ControlPanel reset={resetArray} 
                          values={array}
            />
        </>
    )
}

export default SortingVisualizer;