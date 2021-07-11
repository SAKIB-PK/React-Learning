import React, { useState } from 'react';

function CountHookTwo() {
    const initialValue = 0;
    const [count,setCount] =useState(initialValue)
    function increementFive(){
        for (let i = 0; i < 5; i++) {
            setCount( prevState => //always use prev state
                prevState+1
            )
            
        }
    }
    return (
        <div>
            <h2>{count}</h2>
            {/* bad Practice */}
            {/* <button onClick={()=>setCount(initialValue)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>Increement</button>
            <button onClick={()=> setCount(count-1)}>Decreement</button>
            
            <button onClick ={() => setCount(count +5 )} >Increement 5</button>  */}
            {/* right way using previous State */}
            <button onClick={()=>setCount(initialValue)}>Reset</button>
            <button onClick={()=>setCount(prevState => prevState+1)}>Increement</button>
            <button onClick={()=> setCount(prevState => prevState-1)}>Decreement</button>
            
            <button onClick ={increementFive} >Increement 5</button> 
            
        </div>
    )
}

export default CountHookTwo
