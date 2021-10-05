import React, { useReducer } from 'react';

const init= 0;
const counter =(curr,action)=>{
    switch (action) {
        case 'increment':
            return curr + 1
            break;
        case 'decrement':
            return curr -1
            break;
        case 'reset':
            return init
            break;
        default:
            return curr
            break;
    }
}
const UseReducer = () => {
    const [count,dispatch] =useReducer(counter,init)
    return (
        <div style={{textAlign:'center'}}>
            <h2>Count - {count}</h2>
            <button onClick={()=> dispatch('increment')}>Increment+</button>
            <button onClick={()=> dispatch('decrement')}>Decrement-</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    );
};

export default UseReducer;