import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LIfeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Life Cycle A'
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
    render() {
        console.log(`LifeCycleA render()`)
        return (
            <div>
                <h2>LIfeCycleA Dom Text</h2>
                <LifeCycleB />
            </div>
        )
    }
}

export default LIfeCycleA
