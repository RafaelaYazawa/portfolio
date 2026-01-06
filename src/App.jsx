import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage"
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {

  return (
    <Router>
    <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
