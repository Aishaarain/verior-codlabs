import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import UserList from './components/Userlist';
import './index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/Userlist" element={<UserList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
