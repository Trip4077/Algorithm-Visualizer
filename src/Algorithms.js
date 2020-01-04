const merge = (main, start, middle, end, aux, animations) => {
    let start_1 = start;
    let start_2 = start;
    let mid = middle + 1;

    while( start_2 <= middle && mid <= end ) {
        // Push compare values for color change
        animations.push([ start_2, mid ]);
        // Push for reverting color
        animations.push([ start_2, mid ]);

        if( aux[start_2] <= aux[mid] ) {
            animations.push([start_1, aux[start_2]]);
            main[start_1++] = aux[start_2++];
        } else {
            animations.push([start_1, aux[mid]]);
            main[start_1++] = aux[mid++];
        }
    }

    while( start_2 <= middle ) {
        animations.push([start_2, start_2]);
        animations.push([start_2, start_2]);

        animations.push([start_1, aux[start_2]]);
        main[start_1++] = aux[start_2++];
    }

    while( mid <= end ) {
        animations.push([mid, mid]);
        animations.push([mid, mid]);

        animations.push([start_1, aux[mid]]);
        main[start_1++] = aux[mid++];
    }
}

const mergeHelper = (main, start, end, aux, animations) => {
    if( start === end) return;

    const middle = Math.floor((start + end) / 2);

    mergeHelper(aux, start, middle, main, animations);
    mergeHelper(aux, middle + 1, end, main, animations);

    merge(main, start, middle, end, aux, animations);
}

const getMergeSortAnimations = array => {
    const animations = [];
    
    if( array.length < 2 ) return array;

    const auxArray = [ ...array ];
    mergeHelper(array, 0, array.length - 1, auxArray, animations );

    return animations;
}

const mergesort = values => {
    const animations = getMergeSortAnimations(values);
    const bars = document.getElementsByClassName('bar');

    for(let i = 0; i < animations.length; i++) {
        const colorChange = i % 3 !== 2;

        if( colorChange ) {
            const [barIndex_1, barIndex_2] = animations[i];

            const barOneStyle = bars[barIndex_1].style;
            const barTwoStyle = bars[barIndex_2].style;

            const color = i % 3 === 0 ? 'red': 'grey';
            const width = i % 3 === 0 ? '15p' : '5px'

            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;

                barOneStyle.width = width;
                barTwoStyle.width = width;
            }, i * 5);
        } else {
            setTimeout(() => {
                const [barIndex_1, newHeight] = animations[i];
                const barOneStyle = bars[barIndex_1].style;

                barOneStyle.height = `${newHeight}px`;

                if( i === animations.length - 1) {
                    for(let j = 0; j < bars.length; j++) {
                        setTimeout(() => {
                            bars[j].style.backgroundColor = 'green'
                        }, j + (j * 2) + 10)
                    }
                }
            }, i * 5);
        }
    }
}


const bubbleHelper = () => {

}

const bubblesort = values => {
    const animations = [];

    while(true) {
        const start = [ ...values ]

        for(let i = 0; i < values.length; i++) {
            // Push compare values indices to animations
            const first = i;
            let second = i + 1;

            if(second === values.length) {
                second -= 1;
            }

            animations.push([first, second]);

            if( values[i] > values[i + 1] ) {
                animations.push([second, first, values[second], values[first]])

                const temp = values[i];
                
                values[i] = values[i + 1];
                values[i + 1] = temp;
            } else {
                animations.push([first, second, values[first], values[second]]);
            }
        }

        values.pop();

        if( JSON.stringify(start) === JSON.stringify(values) ) {
            break;
        }
    }

    const bars = document.getElementsByClassName('bar');

    for(let i = 0; i < animations.length; i++) {
            
            const compare = i % 2 === 0;

            if(compare) {
              
                const [first, second] = animations[i];
                const barOne = bars[first];
                const barTwo = bars[second];

  
                setTimeout(() => {
                    barOne.style.backgroundColor = 'red';
                    barTwo.style.backgroundColor = 'red';
                }, i * 5);
            } else { 
                const [ first, second, height1, height2 ] = animations[i];

                const barOne = bars[first];
                const barTwo = bars[second];

                setTimeout(() => {
                    barOne.style.backgroundColor = 'grey'
                    barTwo.style.backgroundColor = 'grey';
         
                    barOne.style.height = `${height2}px`
                    barTwo.style.height = `${height1}px`

                    if( i === animations.length - 1) {
                        for(let j = 0; j < bars.length; j++) {
                            setTimeout(() => {
                                bars[j].style.backgroundColor = 'green'
                            }, j + (j * 2) + 10)
                        }
                    }
                }, i * 5);
            }
    }
    
    // return [ ...values ];
}

const selectionsort = values => {
    const bars = document.getElementsByClassName('bar');

    for(let i = 0; i < values.length; i++) {
        let smallest = i;

        setTimeout(() => {
            bars[i].style.backgroundColor = 'red';
        }, i * 10)

        for(let j = i+1; j < values.length; j++) {
            setTimeout(() => {
                bars[j].style.backgroundColor = 'blue';
            }, j * 10)

            if( values[j] < values[smallest]) {
                const old_smallest = smallest;
                smallest = j

                setTimeout(() => {
                    bars[old_smallest].style.backgroundColor = 'grey';
                    bars[smallest].style.backgroundColor = 'green';
                }, j * 10 + 10)
            }

            setTimeout(() => {
                bars[j].style.backgroundColor = 'grey'
            }, j * 10 + 20);
        }

        const temp = values[i]
        values[i] = values[smallest];
        values[smallest] = temp;

        setTimeout(() => {
            const temp_height = bars[i].style.height;
        
            bars[i].style.height = bars[smallest].style.height;
            bars[smallest].style.height = temp_height;
           
            bars[i].style.backgroundColor = 'grey'

            if(i === values.length-1) {
                for(let j = 0; j < values.length; j++) {
                    setTimeout(() => {
                        bars[j].style.backgroundColor = 'green'
                    }, j * 10);
                }
            }
        }, i * 10 + 10)
    }
}

const insertionsort = values => {
    console.log('insertion')
}

const quicksort = values => {
    console.log('quick')    
}

export {
    mergesort,
    bubblesort,
    selectionsort,
    insertionsort,
    quicksort
} 