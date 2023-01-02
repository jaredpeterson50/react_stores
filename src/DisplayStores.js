import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function DisplayStores() {
  const [response, setResponse] = useState();
  useEffect(() =>{
    async function fetchData(){
      const res = await await fetch('http://127.0.0.1:5000/store');
      const res_json = await res.json();
    const displayData =res_json.stores.map((store)=>{
          return(
            <>
              <tr>
                  <td colSpan={3}>{store.name}</td>
              </tr>
              {store.items.map((items)=>{
                  return(
                    <>
                    <tr>
                      <td></td>
                      <td>{items.name}</td>
                      <td>{items.price}</td>
                    </tr>
                    </>
                  )
                  })}
              </>
    )})
    setResponse(displayData);
  }
  fetchData()
 },[])
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Store</th>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {response}
      </tbody>
    </Table>
  );
}

export default DisplayStores;