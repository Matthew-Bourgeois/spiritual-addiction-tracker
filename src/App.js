import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Todo from './pages/Todo';  // Ensure this path matches where your Todo.js is located
import Contact from './pages/Contact';  // Ensure this path matches where your Contact.js is located

function App() {
  return (
    <Router>
      <div>
        <h1>Spiritual Addiction Tracker</h1>
        <nav>
          <ul>
            <li><a href="/todos">Todos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/todos" component={Todo} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
