import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Life Cycle B'
        }
        console.log(`LifeCycleB Constructor`);
    }
    static getDerivedStateFromProps(state,props){
        console.log(`LifeCycleB getDerivedStateFromProps`)
        return null
    }
    
    componentDidMount(){
        console.log(`LifeCycleB ComponentDidMount.`)
    }
    render() {
        console.log(`LifeCycleB render()`)

        return (
            <div>
                <h2>LifeCycleB Dom Text</h2>
            </div>
        )
    }
}

export default LifeCycleB
