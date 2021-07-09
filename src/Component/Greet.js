import React from 'react';

const user ={
    name: 'Mohammad Ali',
    age : 18,
    height: '5.7 inch'
}
    

function Greet(){
    return(
        <div>

            <h1>Hello {user.name}</h1>
            <p>I'm {user.age} and My height is {user.height}</p>

        </div>
    )
}
// const Greet = () => <h1>Hello Mohammad ali Sakib</h1>
export default Greet;