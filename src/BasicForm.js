import React, { Component } from 'react'

class BasicForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             email:'',
             topic:'Vue'
        }
    }
    userHundle =(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    emailHundle =(event) =>{
        this.setState({
            email:event.target.value
        })
    }
    topicHundle = event =>{
        console.log(event)
        this.setState({
            topic:event.target.value
        })
    }
    formSubmit =(event)=>{
        alert(`My name is ${this.state.username}. My email is also ${this.state.email}.My hoby is ${this.state.topic}`)
        event.preventDefault();
    }
    
    render() {
        return (
        <form onSubmit={this.formSubmit}>
            <div>
                <label for="uname">Username:</label>
                <input type="text" id='uname' value={this.state.username} onChange ={this.userHundle} />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id='email' value={this.state.email} onChange ={this.emailHundle} required />
            </div>
            <div>
                <label for="topic">Topic:</label>
                <select value="this.state.topic" id="topic" onChange={this.topicHundle}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
            </div>

            <button type="submit">Send</button>
        </form>
        )
    }
}
export default BasicForm