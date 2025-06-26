import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import Product from "./components/Product";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
