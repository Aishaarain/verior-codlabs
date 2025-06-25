
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [task,settask]=useState('');
const [tasks,settasks]=useState(()=>{
const save= localStorage.getItem("tasks");
 return save? JSON.parse(save):[]
}
)
useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(tasks))
},[tasks]);

const addTask = () =>
  task.trim()
    ? settasks(prev => [...prev, task.trim()])
    : settasks('');


const deleteTask = index => settasks(tasks.filter((_, i) => i !== index));
  return (
    <>
     <div className="container">
      <h1> To-Do List</h1>
      <div className="input-area">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => settask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((item, index) => (
          <li key={index} className="task-item">
            <span>{item}</span>
            <button onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
    
    </>
  );
}

export default App;
