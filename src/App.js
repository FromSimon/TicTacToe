// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TicTacToe from './TicTacToe';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tic-tac-toe">Tic Tac Toe</Link>
            </li>
            <li>
              <Link to="/quote-generator">Quote Generator</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/tic-tac-toe" component={TicTacToe} />
      </div>
    </Router>
  );
}

export default App;
