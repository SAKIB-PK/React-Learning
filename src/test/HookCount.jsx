import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const HookCount = () => {
    const [count,setCount] = useState(0)
    function tick(){
        setCount(prevCount=>prevCount+1)
        /* setInterval(() => {
            setCount(prev=> prev +1)
        }, 1000); */
    }
    useEffect(()=>{
        console.log('Effect call');
        const interVal = setInterval(tick,1000)
        return ()=>{
            clearInterval(interVal)
        }
    },[])
    return (
        <div>
            <h2>Count - {count}</h2>
            
        </div>
    );
};

export default HookCount;