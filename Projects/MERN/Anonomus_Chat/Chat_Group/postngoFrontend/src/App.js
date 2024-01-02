import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Studentlogin from './components/Studentlogin';
import Adminlogin from './components/Adminlogin';
import NewAccount from './components/NewAccount';
import StudentView from './components/Studentview';
import AdminView from './components/AdminView';
// import StudentView from './components/Studentview';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Studentlogin />} />
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route path="/NewAccount" element={<NewAccount />} />
        <Route path="/StudentView" element={<StudentView />} />
        <Route path="/Adminlogin/AdminView" element={<AdminView />} />
      </Routes>
    </Router>
  );
};

export default App;

