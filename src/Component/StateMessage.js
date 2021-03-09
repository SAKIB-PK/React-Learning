import React, { Component } from 'react'

class StateMsg extends Component{
    constructor(){
        super()
            this.state={
                message: "Hello Visitor!"
            }
        
    }

changeMsg(){
    this.setState({
        message: "Thank you for Subscribe!"
    })
}
    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick = {()=>this.changeMsg()}>Subscribe</button>
            </div>
        )
    }
}
export default StateMsg