import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const Task = ({ description }, { id }) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        {id} {description}
        <Button variant="warning">Done</Button>
        <Button variant="dark">Delete</Button>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Task;

// attributes:I d, description, isDone
