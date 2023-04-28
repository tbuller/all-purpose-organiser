import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignupProps {
  navigate: ReturnType<typeof useNavigate>
}

const Signup: React.FC<SignupProps> = ({ navigate }) => {

  return (
    <div className="signup-page-container">

    </div>
  )
}

export default Signup;