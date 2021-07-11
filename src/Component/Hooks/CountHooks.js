import React, { useState } from 'react'

function CountHooks() {
    const [count,setCount] = useState(0)
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=> setCount(count + 1)}>Increase</button>
        </div>
    )
}
export default CountHooks
