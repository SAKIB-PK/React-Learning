import React, { Component } from 'react';

class Ref extends Component {
    constructor(props) {
        super(props)
    
        //Using Ref 
        this.inputRef = React.createRef();
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    alertBox(){
        alert(`I am input is ${this.inputRef.current.value}`)
    }
    
    render() {
        return (
            <>
                <input type='text'  ref={this.inputRef}/>
            </>
        )
    }
}

export default Ref
