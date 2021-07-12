import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LIfeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'LifeCycleA State'
        }
        console.log(`LifeCycleA Constructor`);
    }
    static getDerivedStateFromProps(state,props){
        console.log(`LifeCycleA getDerivedStateFromProps`)
        return null
    }
    
    componentDidMount(){
        console.log(`LifeCycleA ComponentDidMount.`)
    }
    shouldComponentUpdate(){
        console.log("LifeCycleA ShouldComponentUpdate");
        return true
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('LifeCycleA ComponentDidUpdate')
    }
    changeText =()=>{
        this.setState({
            name:"LifeCycleA Update"
        })
    }
    render() {
        console.log(`LifeCycleA render()`)
        return (
            <div>
                <h2>{this.state.name}</h2>
                <LifeCycleB />
                <button onClick={this.changeText}>Update</button>
            </div>
        )
    }
}

export default LIfeCycleA
