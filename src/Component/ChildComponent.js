
import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.msg("sakib")}>Click</button>
        </div>
    )
}


export default ChildComponent;