import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App(){

  const [data, setData] = useState([]);

  function apiCalling(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
  }
  useEffect(()=>{
    apiCalling();
  },[])
  console.log(data)
  return (
    <>
      <ul>  
        {
          data.map((item)=>{
            return <li key={item.key}>{item.title}</li>
          })
        }
      </ul>
    </>
  )
}
