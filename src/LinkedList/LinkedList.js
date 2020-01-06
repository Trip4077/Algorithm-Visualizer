import React,  { useState } from 'react';
import { Node, DLL } from '../DataStructures';

const LinkedList = () => {
    const [ list, setList ] = useState([]);
    const [ render, causeRender ] = useState(0);
    const [ value, setValue ] =  useState('');


    const onChangeHandler = (event) => {
        setValue(event.target.value);
    } 

    const addValueHead = val => {
        setList( [ val, ...list ] )
    }

    const addValueTail = val => {
        setList( [ ...list, val ] );
    }

    const removeValueHead = () => {
        setList( list.splice(1) )
    }

    const removeValueTail = () => {
        setList( list.splice(0, list.length-1) )
    }

    const dll = new DLL();

    list.map(val => {
        dll.add_to_tail(val)
    })

    return(
        <>
            <div className="list">
                {
                  list 
                }
                
                <input type='text' placeholder='value...'onChange={e => onChangeHandler(e)} />
                <button onClick={() => addValueHead(value)}>Add To Head</button>
                <button onClick={() => addValueTail(value)}>Add To Tail</button>
                <button onClick={removeValueHead}>Remove From Head</button>
                <button onClick={removeValueTail}>Remove From Tail</button>
            </div>
            {/* <ControlPanel reset={resetArray} 
                          values={array}
            /> */}
        </>
    )
}

export default LinkedList;