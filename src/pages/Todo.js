import React, { useState } from 'react';

const Todo = () => {
  // State to store the tasks
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState(""); // State to handle input field

  // Handle form submit to add a task
  const addTask = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput(""); // Clear the input field after adding the task
    }
  };

  // Handle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Handle task deletion
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h2>To-Do List</h2>
      
      {/* Task input and add task button */}
      <form onSubmit={addTask}>
        <input 
          type="text" 
          value={taskInput} 
          onChange={(e) => setTaskInput(e.target.value)} 
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Display the list of tasks */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span 
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
