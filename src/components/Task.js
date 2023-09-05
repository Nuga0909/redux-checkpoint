// Task.js
import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useDispatch } from 'react-redux';
import { toggle, deleteTask, edit } from '../redux/tasks';

const Task = ({ id, description, isDone }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editDescription, setEditDescription] = useState(description);
    const dispatch = useDispatch();

    const handleToggle = () => dispatch(toggle(id));
    const handleDelete = () => dispatch(deleteTask(id));
    const handleEdit = () => {
        dispatch(edit({ id, description: editDescription }));
        setIsEditing(false);
    };

    return (
        <ListGroup>
            <ListGroup.Item>
                {isEditing ? (
                    <>
                        <input value={editDescription} onChange={e => setEditDescription(e.target.value)} />
                        <Button onClick={handleEdit}>Save</Button>
                    </>
                ) : (
                    <>
                        <h3>{description}</h3>                        
                        <Button variant="warning" onClick={handleToggle}>
                            {isDone ? "Undo" : "Done"}
                        </Button>
                        <Button variant="dark" onClick={handleDelete}>Delete</Button>
                        <Button onClick={() => setIsEditing(true)}>Edit</Button>
                    </>
                )}
            </ListGroup.Item>
        </ListGroup>
    );
};

export default Task;
