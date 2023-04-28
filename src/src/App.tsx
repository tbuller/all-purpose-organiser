import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';

const App = () => {

  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Landing navigate={navigate} />} />
      <Route path="/singup" element={<Signup navigate={navigate} />} />
      <Route path="/login" element={<Login navigate={navigate} />} />
    </Routes>
  )
    
}

export default App;
