import React from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header>
        <img src="https://thenounproject.com/icon/mediterranean-sea-2387659/" alt="Logo" className="logo" />
        <h1>Community Events and Resources Board</h1>
      </header>
      <main>
        <Board />
      </main>
      <footer>
        <p>created by ladi fashogbon</p>
      </footer>
    </div>
  );
}

export default App;