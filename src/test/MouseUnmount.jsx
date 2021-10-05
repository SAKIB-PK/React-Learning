import React from 'react';
import { useState } from 'react/cjs/react.development';
import HookMouse from './HookMouse';

const MouseUnmount = () => {
    const [display,setDisplay] = useState(true)
    return (
        <div>

            {display && <HookMouse/>}
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            
        </div>
    );
};

export default MouseUnmount;