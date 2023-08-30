import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


function Task() {
  return (
    <ListGroup>
      <ListGroup.Item>Cras justo odio 
      <Button variant="dark">Dark</Button>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default Task



// attributes:I d, description, isDone