import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Todo from './pages/Todo';
import Contact from './pages/Contact';
import SevenDeadlySins from './pages/SevenDeadlySins';
import SinLog from './pages/SinLog'; // ✅ Import the new page

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Spiritual Addiction Tracker</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/todo">Todos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/seven-deadly-sins">Seven Deadly Sins</Link></li>
            <li><Link to="/sin-log">Sin Log</Link></li> {/* ✅ Add Sin Log Link */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/seven-deadly-sins" element={<SevenDeadlySins />} />
          <Route path="/sin-log" element={<SinLog />} /> {/* ✅ SinLog route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
