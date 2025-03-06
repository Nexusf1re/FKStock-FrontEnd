import './App.css'; // Import the CSS file
import React, { useEffect } from 'react';
import Home from './pages/home/home'; // Import the Home component
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
    </Router>
  );
}

export default App;