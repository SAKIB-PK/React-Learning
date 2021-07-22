import React, { useState } from 'react';

function HookArray() {
    const [number,setNumber] = useState([])
    const arrayUpdate =()=>{
        let num = Math.floor(Math.random()*10)+1;
        setNumber([...number,num])
        console.log(number)
    }
    return (
        <>
        <button onClick={arrayUpdate}>Add Value</button>
        <ul>
        {number.map((val,index )=><li key={index}>{val}</li>)}
        </ul>
        
        </>
    )
}

export default HookArray
