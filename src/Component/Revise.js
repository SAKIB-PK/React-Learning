import React from 'react'

function UserGreeting( props){
    return(
        <>
        <h1 style={style.align}>Wecolcome {props.name} </h1>
        <h2>How are looking for good.</h2>
        </>

    )
}
const style = {
    align:{
        "text-align":"center"
    }
}
function VisitorGreeting(props) {
      return(
        <>
            <h2 style={style.align}>Welcome User </h2>
            <p>please Sign up</p>
        </>
    )
}


function Revise(props) {
    if(true){
        return <UserGreeting name = "mohammad ali" />
    
    }else{
        return <VisitorGreeting/>
    }
    
}


export default Revise
