import './App.css';
import React from 'react';
import Home from './pages/Home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/form" element={<Form />} /> */}
          </Routes>
    </Router>
  );
}

export default App;