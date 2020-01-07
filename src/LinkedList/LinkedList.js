import React,  { useState } from 'react';
import { DLL } from '../DataStructures';

import './LinkedList.css';

const LinkedList = () => {
    const [ list, setList ] = useState([]);
    const [ structure, setStructures ] = useState('double');
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
            <h2 style={{ textAlign: "center", fontSize: "36px", margin: "0", marginBottom: "10px" }}> Select A List Structure And Add Data </h2>
            <div className="list">
                {
                  list.map((value, index) => {

                    switch(structure) {
                        case "double":
                            return (
                                <div className='node'>
                                    {
                                        index === list.length - 1 ? null : <span id="arrow"><i class="fas fa-exchange-alt"></i></span>
                                    }
        
                                    {value}
                                </div>
                            )
                            break;

                        case "single":
                        case "queue":
                        case "stack":
                            return (
                                <div className='node'>
                                    {
                                        index === list.length - 1 ? null : <span id="arrow"><i class="fas fa-long-arrow-alt-right"></i></span>
                                    }
        
                                    {value}
                                </div>
                            )
                    }
                  }
                )
            }
            </div>
            <div className='controls'>
                <div class="structure-select">
                    <input id="list-input" type='text' placeholder='add value...'onChange={e => onChangeHandler(e)} />
                    <select onChange={e =>{ e.preventDefault(); setStructures(e.target.value) }}>
                        <option value="double">Double Linked List</option>
                        <option value="single">Single Linked List</option>
                        <option value="stack">Stack</option>
                        <option value="queue">Queue</option>
                    </select>
                </div>
                <div>
                    {
                        (() => {
                            switch(structure) {
                                case "single":
                                case "double":
                                    return (
                                        <>
                                        <button className='btn' onClick={() => addValueHead(value)}>Add Head</button>
                                        <button className='btn' onClick={() => addValueTail(value)}>Add Tail</button>
                                        <button className='btn' onClick={removeValueHead}>Remove Head</button>
                                        <button className='btn' onClick={removeValueTail}>Remove Tail</button>
                                        </>
                                    )
                                    break;

                                case "queue":
                                    return (
                                        <>
                                        <button className='btn' onClick={() => addValueTail(value)}>Enqueue</button>
                                        <button className='btn' onClick={removeValueHead}>Dequeue</button>
                                        </>
                                    )
                                    break;
                
                                case "stack":
                                    return (
                                        <>
                                        <button className='btn' onClick={() => addValueHead(value)}>Push</button>
                                        <button className='btn' onClick={removeValueHead}>Pop</button>
                                        </>
                                    )
                                    break;
                            }
                        })()
                    }
                </div>
            </div>
        </>
    )
}

export default LinkedList;