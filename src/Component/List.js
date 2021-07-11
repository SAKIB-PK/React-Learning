import React from 'react';

function List() {
    const numbers = [1, 2, 3, 4, 5];
    const number = numbers.map(num => <h2>{num} multiplication is {num *2}</h2>)
    return (
        <div>
           {number}
        </div>
    )
}

export default List
