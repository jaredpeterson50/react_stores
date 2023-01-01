import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddItem() {
  const [response, setResponse] = useState();
  async function handleSubmit(e){
    console.log("handle submit");
    console.log(e.target[0].value) //store
    console.log(e.target[1].value) //item  2 is the price
    e.preventDefault(); //prevents refresh of page
    var url = "http://127.0.0.1:5000/store/" + e.target[0].value + "/items";
    console.log("url: " + url);
    var data = {
        "name": "placeholder",
        "price": "placeholder"
    };
    data.name=e.target[1].value;
    data.price=e.target[2].value
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.status === 200){
      setResponse("successfully added item to the store")
    }
    else{
      setResponse("error adding item to the store")
    }
    console.log(response);
  }

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Existing Store name</Form.Label>
        <Form.Control type="text" placeholder="Enter Store name" />
        <Form.Text className="text-muted">
          Enter an existing store name
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Item Name</Form.Label>
        <Form.Control type="text" placeholder="Enter item name" />
        <Form.Text className="text-muted">
          Enter Item Name
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Item Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Item price" />
        <Form.Text className="text-muted">
          Enter Item Price
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

export default AddItem;