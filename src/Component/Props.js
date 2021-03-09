import React, { Component } from 'react'

// function PassValue(props){
//     return(
//         <div>
//             <h3>Hello My name is {props.name}.</h3>
//             <h4>{props.children}</h4>
//         </div>
//     )
// }
// const PassValue=(e) => <h3>Hello my name is {e.name}. {e.children}</h3> //using Arrow function 
class PassValue extends Component {
    render(){
        return <h2>Hello my name is {this.props.name}. {this.props.children}</h2>
    }
}
export default PassValue 