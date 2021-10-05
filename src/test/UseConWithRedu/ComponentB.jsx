import React, { useContext } from 'react';
import { CounterCon } from '../../App';

const ComponetB = () => {
    const {counter,counterDispatch} = useContext(CounterCon)
    return(  
        <div>
            ComponentB - {counter.count}
            <button onClick={()=> counterDispatch('increment')}>Increment+</button>
            <button onClick={()=> counterDispatch('decrement')}>Decrement-</button>
            <button onClick={()=> counterDispatch('reset')}>Reset</button>
        </div>
    );
};

export default ComponetB;