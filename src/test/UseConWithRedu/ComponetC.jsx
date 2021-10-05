import React, { useContext } from 'react';
import { CounterCon } from '../../App';

const ComponetC = () => {
    const {counter,counterDispatch} = useContext(CounterCon)
    return(  
        <div>
            ComponentC - {counter.count}
            <button onClick={()=> counterDispatch('increment')}>Increment+</button>
            <button onClick={()=> counterDispatch('decrement')}>Decrement-</button>
            <button onClick={()=> counterDispatch('reset')}>Reset</button>
        </div>
    );
};

export default ComponetC;