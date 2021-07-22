import React, { Component } from 'react';

export default class BeginerFetch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:[]
             
        }
        this.fetchData = this.fetchData.bind(this)
    }
    
    fetchData(){
        const axios = require('axios');
        const data = axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res =>this.setState({data:res.data})
        )
        .catch(err=>console.log(err))
    }
    
    render() {
        const post = this.state.data;
        return (
            <div>
                <button onClick ={this.fetchData}>Get Data</button>
                <ul>
                    {post.map(res => <li key={res.id}>{res.title}</li>)}
                </ul>
                
                
            </div>
        )
    }
}
