import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { setLoggedInUser } from '../../redux/usersSlice';
import '../../styling/Auth/Login.scss';

interface LoginProps {
  navigate: ReturnType<typeof useNavigate>
}

const Login: React.FC<LoginProps> = ({ navigate }) => {

  const dispatch = useDispatch();
  const users = useSelector((state: RootStateUsers) => state.users.users);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    const relevantUser = users.find(user => user.email === email && user.password === password);
    if (relevantUser) {
      console.log("successfully authenticated");
    } else {
      console.log("username or password incorrect");
    }
  }

  return (
    <div className="login-page-container">
      <label className="login-page-label">Email:</label>
      <input className="login-page-input" type="text" onChange={handleEmailChange} />
      <label className="login-page-label">Password:</label>
      <input className="login-page-input" type="password" onChange={handlePasswordChange} />
      <button className="login-page-button" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login;