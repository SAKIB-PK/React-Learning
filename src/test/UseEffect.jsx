import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count,setCount] = useState(0)
    const [timer,setTimer] = useState(new Date().toLocaleTimeString())
    function increment(){
        setCount(prev => prev + 1)
        console.log(count);
        
    }
    function tick(){
        setTimer(new Date().toLocaleTimeString())
    }
    useEffect(()=>{
        document.title = count
    },[count])
    useEffect(()=>{
        console.log('time');
        setInterval(tick,1000)
        return(
            clearInterval(tick)
        )
    },[timer])
    return (
        <div style={{textAlign:'center'}}>            
            <h2>Count: {count}</h2>
            <button onClick ={increment}>Increment+</button>

        </div>
    );
};

export default UseEffect;
