import axios from 'axios';
import React, { useEffect, useReducer } from 'react';


const initialState = {
    loading:true,
    post: {},
    error:''
}
const reducer =(state,action)=>{
    switch (action.type) {
        case 'FetchSuccess':
            return{
                loading:false,
                post:action.payload,
                error:''
            }
            break;
        case 'FetchErr':
            return{
                loading:false,
                post:{},
                error:'Something Went Wrong'
            }
    
        default:
            return state
            break;
    }
}

const DataFetchingTwo = () => {
    const [state,dispatch] =useReducer(reducer,initialState)


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res  => dispatch({type:'FetchSuccess',payload:res.data}))
        .catch(err =>dispatch({type:'FetchErr'}))
      },[])


    return (
        <div>
            {state.loading?"Loading": state.post.title}
            {state.error? state.error:null}
        </div>
    );
};

export default DataFetchingTwo;