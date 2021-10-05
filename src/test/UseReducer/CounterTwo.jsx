import React, { useReducer } from 'react';

// Define init or initial state Value
const init = {
    counterOne: 1,
    counterTwo: 5
}

function hundle(state,action ){
    console.log(state);
    switch (action.type ) {
        case 'incrementOne':
            return {...state,counterOne: state.counterOne +action.value}
            break;
        case 'decrementOne':
            return {...state,counterOne: state.counterOne -action.value}
            break;
        case 'incrementTwo':
            return {...state,counterTwo: state.counterTwo +action.value}
            break;
        case 'decrementTwo':
            return {...state,counterTwo: state.counterTwo -action.value}
            break;
        case 'reset':
            return init
            break;
        default:
            return state
            break;
    }
}
const CounterTwo = () => {
    const [counter,dispatch] = useReducer(hundle,init)
    return (
        <div>
            <h2>This is Counter Two Example : </h2>
            <div>
                <h2>Counter One : {counter.counterOne} </h2>
                <h2>Counter Two : {counter.counterTwo}</h2>
                <div className="counter-one">
                    <button onClick={() => dispatch({type:'incrementOne',value:1})}>Increment One+</button>
                    <button onClick={()=> dispatch({type:'decrementOne',value:1})}>Decrement One-</button>
                </div>
                <div className="counter-Two">
                    <button onClick={() => dispatch({type:'incrementTwo',value:5})}>Increment Two+</button>
                    <button onClick={()=> dispatch({type:'decrementTwo',value:5})}>Decrement Two-</button>
                </div>
                <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
            </div>
        </div>
    );
};

export default CounterTwo;