import React, { useContext } from 'react';
import { Channel, User } from '../../App';


const ComponentE = () => {
    const name = useContext(User)
    const fullName = useContext(Channel)
    return (
        <div>
            <h1>{fullName}- {name}</h1>
        </div>
    );
};

export default ComponentE;