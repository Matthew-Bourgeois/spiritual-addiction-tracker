import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Todo from './pages/Todo'; // Make sure it's 'Todo' (singular)
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Spiritual Addiction Tracker</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/todo">Todo</a></li> {/* Use singular here as well */}
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/todo" component={Todo} /> {/* Use singular here as well */}
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

