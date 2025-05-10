import React from 'react';

const NewTaskForm = ({ taskInput, setTaskInput, addTask }) => {
  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;

