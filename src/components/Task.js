import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function Task({ description }, { id }) {
  return (
    <ListGroup>
      <ListGroup.Item>
        {id}. {description}
        <Button variant="success">Done</Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Task;

// attributes:I d, description, isDone
