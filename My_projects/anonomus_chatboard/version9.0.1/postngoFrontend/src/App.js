import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main'
import Adminlogin from './components/Adminlogin';
import NewAccount from './components/NewAccount';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route path="/NewAccount" element={<NewAccount />} />
      </Routes>
    </Router>
  );
};

export default App;

