import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import HomePage from './components/HomePage/HomePage'

const App = () => {

  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Landing navigate={navigate} />} />
      <Route path="/signup" element={<Signup navigate={navigate} />} />
      <Route path="/login" element={<Login navigate={navigate} />} />
      <Route path="/home" element={<HomePage navigate={navigate} />} />
    </Routes>
  )
    
}

export default App;
