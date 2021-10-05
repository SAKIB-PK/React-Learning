import React, { Component } from 'react';

class ReviseClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            date:new Date()

        }
    }
    tick=()=>{
        this.setState({
            date:new Date()
        })
    }
    componentDidMount(){
        setInterval(this.tick,1000)
        
    }
    

    
    render() {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString(this.props.local)}</h2>
            </div>
        )
    }
}

export default ReviseClass
