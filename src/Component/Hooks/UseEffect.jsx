import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        document.title=`Clicked ${count} Times`
        
    }, [count])

    const tick =()=>{
        console.log('clock is runing');
        setDate(new Date())
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            console.log('component unmount');
            clearInterval(interval)
        }
    },[])

    const addClick =()=>{
        setCount(prev => prev+1)
    }
    return (
        <div>
            <p>Time:{date.toLocaleTimeString("bn-BD")}</p>
            <button onClick={addClick}>Click</button>
        </div>
    )
}

export default UseEffect
