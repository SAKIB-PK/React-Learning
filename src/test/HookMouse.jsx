import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const HookMouse = () => {

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    
    function mouseTouch(e){
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        window.addEventListener('mousemove',mouseTouch)
        return ()=>{
            console.log("Component Unmounting Succesfully!")
            window.removeEventListener('mousemove',mouseTouch)
        }
    },[])

    return (
        <div style={{color:'white',textAlign:'center'}}>
            <h2>Hooks X={x} , Y={y}</h2>
        </div>
    );
};

export default HookMouse;