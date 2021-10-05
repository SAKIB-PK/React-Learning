import React, { useContext } from 'react';
import { CounterCon } from '../../App';

const ComponetA = () => {
    const {counter,counterDispatch} = useContext(CounterCon)
    return(  
        <div>
            ComponentA - {counter.count}
            <button onClick={()=> counterDispatch('increment')}>Increment+</button>
            <button onClick={()=> counterDispatch('decrement')}>Decrement-</button>
            <button onClick={()=> counterDispatch('reset')}>Reset</button>
        </div>
    );
};

export default ComponetA;
