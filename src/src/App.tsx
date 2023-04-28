import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';

const App = () => {

  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Landing navigate={navigate} />} />
    </Routes>
  )
    
}

export default App;
