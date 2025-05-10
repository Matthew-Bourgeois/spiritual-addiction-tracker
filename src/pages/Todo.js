import React, { useState, useEffect } from 'react';
import NewTaskForm from './NewTaskForm';
import FilterButtons from './FilterButtons';
import TaskList from './TaskList';

const Todo = () => {
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("spiritualGoals");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("spiritualGoals", JSON.stringify(goals));
  }, [goals]);

  const [goalInput, setGoalInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addGoal = (e) => {
    e.preventDefault();
    if (goalInput.trim()) {
      setGoals([...goals, { id: Date.now(), text: goalInput, completed: false }]);
      setGoalInput("");
    }
  };

  const toggleGoalCompletion = (id) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const filteredGoals = goals.filter(goal => {
    if (filter === "completed") return goal.completed;
    if (filter === "incomplete") return !goal.completed;
    return true;
  });

  return (
    <div>
      <h2>Spiritual Goals</h2>
      <p style={{ marginBottom: '1rem' }}>
        Set daily goals to grow closer to God. These could include prayer, fasting, scripture reading, or service.
      </p>

      <FilterButtons filter={filter} setFilter={setFilter} />

      <div className="task-container">
        <NewTaskForm
          taskInput={goalInput}
          setTaskInput={setGoalInput}
          addTask={addGoal}
          placeholder="Enter a spiritual goal..."
        />
        <TaskList
          tasks={filteredGoals}
          toggleTaskCompletion={toggleGoalCompletion}
          deleteTask={deleteGoal}
        />
      </div>
    </div>
  );
};

export default Todo;

