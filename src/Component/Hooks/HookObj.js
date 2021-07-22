import React, { useState } from 'react'

function HookObj() {
    const [name,setName] =useState({firstName:'',lastName:''})
    return (
        <form onChange={e=>e.preventDefault()}>
            <label for="fName">First Name:</label>
            <input type="text"id='fName' value={name.firstName} onChange={(e)=> setName({...name,firstName:e.target.value})}/>
            {/* Allways use spread operator  */}

            <br />
            <label for="LName">Last Name:</label>
            <input type="text" id='LName' value={name.lastName} onChange={(e)=> setName({...name,lastName:e.target.value})}/>

            <br/>
            <h2>FirstName:{name.firstName}</h2>
            <h2>LastName:{name.lastName}</h2>
        </form>

    )
}

export default HookObj
