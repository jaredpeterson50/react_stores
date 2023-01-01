import React, { useState, useEffect } from 'react';

export default function DisplayStores() {
  const [response, setResponse] = useState();
 useEffect(() =>{
  async function fetchData(){
    const res = await await fetch('http://127.0.0.1:5000/store');
    const res_json = await res.json();
    console.log(res_json);
    setResponse(JSON.stringify(res_json));
  }
  fetchData()
 },[])
  return (
    <div>
      {response}
    </div>
  )
}