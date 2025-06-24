import React from 'react'
import { useState,useEffect } from 'react';

const Todo = () => {

      const [task, setTask] = useState('');
      const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
      });
    
      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);
    
      const addTask = () => {
        if (task.trim() === '') return;
        setTasks([...tasks, task.trim()]);
        setTask('');
      };
    
      const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
      };
    
  return (
    <div className="container">
      <h1><i class="fa-solid fa-book"></i> To-Do List</h1>
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
    
  )
}

export default Todo