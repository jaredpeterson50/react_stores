import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddStore() {
  const [response, setResponse] = useState();

  async function handleSubmit(e){
    const url = 'http://127.0.0.1:5000/storePost'
    let data = {"name":"placeholder"}
    e.preventDefault(); //prevents refresh of page
    data.name = e.target[0].value
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache', 
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    var resJson = await response.json();
    if(response.status === 200){
        setResponse("successfully added store")
    }
    else{
        setResponse("failed to add store")
    }
    console.log(resJson);
  }
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Store name</Form.Label>
        <Form.Control type="text" placeholder="Store Name" />
        <Form.Text className="text-muted">
          Enter the store you would like to add.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <h1>{response}</h1>
    </>
  );
}

export default AddStore;