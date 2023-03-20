import React from 'react';
import './App.css';
import CreateUrlForm from './components/CreateUrlForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tiny URL</h1>
      </header>
      <main>
        <CreateUrlForm />
      </main>
    </div>
  );
}

export default App;
