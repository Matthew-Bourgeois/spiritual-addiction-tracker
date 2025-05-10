import React from 'react';

const NewTaskForm = ({ taskInput, setTaskInput, addTask, placeholder }) => {
  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder={placeholder || "Enter a new task"}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTaskForm;
