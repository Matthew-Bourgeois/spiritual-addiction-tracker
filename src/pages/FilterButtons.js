import React from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>All</button>
      <button onClick={() => setFilter("completed")} disabled={filter === "completed"}>Completed</button>
      <button onClick={() => setFilter("incomplete")} disabled={filter === "incomplete"}>Incomplete</button>
    </div>
  );
};

export default FilterButtons;
