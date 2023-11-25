import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TicTacToe from './TicTacToe';
import QuoteGenerator from './QuoteGenerator';

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

        <Route path="/tic-tac-toe" component={<TicTacToe/>} />
        <Route path="/quote-generator" component={<QuoteGenerator/>} />
      </div>
    </Router>
  );
}

export default App;
