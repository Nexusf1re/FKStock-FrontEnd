import './App.css';
import React from 'react';
import Home from './pages/TempHome/Home';
import Form from './pages/TempFormField/FormField';
import Dashboard from './pages/TempDashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
             <Route path="/form" element={<Form />} />
             <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
    </Router>
  );
}

export default App;