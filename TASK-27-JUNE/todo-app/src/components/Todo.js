import React, { useReducer, useEffect, useState } from 'react';

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter((_, index) => index !== action.payload);
    case 'LOAD':
      return action.payload;
    default:
      return state;
  }
};

const Todo = () => {
  const [task, setTask] = useState('');
  const [tasks, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === '') return;
    dispatch({ type: 'ADD', payload: task.trim() });
    setTask('');
  };

  const deleteTask = (index) => {
    dispatch({ type: 'DELETE', payload: index });
  };

  return (
    <div className="container">
      <h1><i className="fa-solid fa-book"></i> To-Do List</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((item, index) => (
          <li key={index} className="task-item">
            <span>{item}</span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
