import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to ARC RAIDERS Hub</h1>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h2>Your adventure begins here</h2>
        <p>Join the ARC RAIDERS community and discover amazing features!</p>
      </section>
      <section id="features">
        <h2>Features</h2>
        <p>Explore the cutting-edge features that ARC RAIDERS offers.</p>
      </section>
      <footer>
        <p>&copy; 2026 ARC RAIDERS. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;