import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import ProductList from './components/ProductList';
import MovieApp from './components/Movieapp';
import './index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/products" element={<ProductList />} />
         <Route path="/Movieapp" element={<MovieApp />} />
      </Routes>
    </Router>
  );
}

export default App;
