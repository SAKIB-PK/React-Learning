import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const DataFetching = () => {
    const [post,setPost] = useState({})
    const [id,setId] =useState(1)
    const [formIdButton,setFormIdButton] = useState(1)
    
    function hundleClick(){
        setFormIdButton(id)
    }

    // Data Fetching from jsonplaceholder
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${formIdButton}`)
        .then(res=> setPost(res.data))
        .catch(err => console.log(err))
    },[formIdButton])
    return (
        <div>
            <input type="text"value={id} onChange={e=> setId(e.target.value)} />
            <button type='button'  onClick={hundleClick}>Fetch Data</button>
            <li>{post.title}</li>
        </div>
    );
};

export default DataFetching;