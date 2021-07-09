import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentChild extends Component {
    constructor(props) {
        super(props)
    

        this.state = {
             msg:"Hey Dear,"
        }
        this.greeting = this.greeting.bind(this)

    }
    
    greeting(child){
        alert(`${this.state.msg} , ${child}`)
    }
    render() {
        return (
            <div>
                <ChildComponent msg ={this.greeting}/>
                <h2>Hello Bangladesh</h2>
            </div>
        )
    }
}

export default ParentChild;

