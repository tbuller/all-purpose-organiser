import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  navigate: ReturnType<typeof useNavigate>
}

const Login: React.FC<LoginProps> = ({ navigate }) => {

  return (
    <div className="login-page-container">

    </div>
  )
}

export default Login;