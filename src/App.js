import './App.css';
import React from 'react';
import Home from './pages/Home/Home';
import Form from './pages/FormField/FormField';
import Dashboard from './pages/Dashboard/Dashboard';
import EditItem from './pages/EditItem/EditItem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/form" element={<Form />} />
             <Route path="/dashboard" element={<Dashboard />} />
             <Route path="/edit/:id" element={<EditItem />} />
          </Routes>
    </Router>
  );
}

export default App;