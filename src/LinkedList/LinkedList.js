import React,  { useState } from 'react';
import { DLL } from '../DataStructures';

import './LinkedList.css';

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
                  list.map((value, index) => {
                      return(
                          <div className='node'>
                              {
                                  index === list.length - 1 ? null : <span id="arrow"><i class="fas fa-exchange-alt"></i></span>
                              }
  
                              {value}
                          </div>
                      )
                  })
                }
            </div>
            <div className='controls'>
                <input id="list-input" type='text' placeholder='add value...'onChange={e => onChangeHandler(e)} />
                <div>
                    <button className='btn' onClick={() => addValueHead(value)}>Add Head</button>
                    <button className='btn' onClick={() => addValueTail(value)}>Add Tail</button>
                    <button className='btn' onClick={removeValueHead}>Remove Head</button>
                    <button className='btn' onClick={removeValueTail}>Remove Tail</button>
                </div>
            </div>
        </>
    )
}

export default LinkedList;