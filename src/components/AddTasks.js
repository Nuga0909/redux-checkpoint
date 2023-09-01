import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function AddTasks({addTask}) {
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Task description"
          aria-label="Task description"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Add New Task {addTask}
        </Button>
      </InputGroup>
    </div>
  );
}

export default AddTasks;
