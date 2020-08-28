import React from 'react';
import './App.css';
import Courses from './Component/Courses/Courses';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className = "main-container">
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Courses></Courses>
      </main>
    </div>
  );
}

export default App;
