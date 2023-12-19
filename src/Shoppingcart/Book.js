import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Book({data}) {

    const handlieClick=()=>{
    console.log("SAI",...data.title)
    
        
        
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
         {data.body}
        </Card.Text>
        <Button variant="success" onClick={handlieClick}>Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Book
