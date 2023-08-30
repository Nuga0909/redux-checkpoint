import React from "react";
import AddTasks from "./AddTasks";
import Task from "./Task";

function ListTask() {
  return (
    <>
      <AddTasks />
      <Task />
      <div>ListTask</div>
    </>
  );
}

export default ListTask;
