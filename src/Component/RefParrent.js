import React, { Component } from 'react';
import Ref from './Ref';


 class RefParrent extends Component {
     constructor(props) {
         super(props)
     
         this.sendRef = React.createRef();
     }
     
     clickHandler = ()=>{
         this.sendRef.current.alertBox()

     }

     
     componentDidMount(){
         console.log(this.sendRef.current)
     }
    render() {
        return (
            <div>
                <Ref ref={this.sendRef}/>
                <button type="submit" onClick={this.clickHandler}>Submit</button>
            </div>
        )
    }
}

export default RefParrent
