import React from 'react'
import './Day11_2.css'
import { useState,useRef } from 'react';
import Child from './Child';

const Day11_2 = () => {
    const inputref=useRef();
    const [roll,setRoll] = useState(0); 
    const [error,setError]=useState("")
    const handleclick = () => {
        const inputnum = inputref.current.value;
        if(inputnum<2 || inputnum>12){
            setError("Number should be between 2 and 12")
        }else{
        setError("");
        setRoll(inputnum);}
    };
    return (
        <div className='body-container'>
            <div className='number-button'>
                <input type='number' className='number-input' name='number-input' ref={inputref} />
            <h3 style={{color:"red"}}>{error}</h3>
                <button className='roll-button' onClick={handleclick}>Roll</button>
            </div>
        <div>
                <Child number={roll} />
            </div>
        </div>
    );
}

export default Day11_2
