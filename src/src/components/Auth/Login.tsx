import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { setUsers, setLoggedInUser } from '../../redux/usersSlice';
import { RootStateAuth } from '../../redux/authSlice';
import { setLoginError } from '../../redux/authSlice';
import LoginError from './LoginError';
import '../../styling/Auth/Login.scss';

interface LoginProps {
  navigate: ReturnType<typeof useNavigate>
}

const Login: React.FC<LoginProps> = ({ navigate }) => {

  const dispatch = useDispatch();
  const users = useSelector((state: RootStateUsers) => state.users.users);
  const loginError = useSelector((state: RootStateAuth) => state.auth.loginError);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(data => {
        dispatch(setUsers(data.users));
      })
  }, [])

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    const relevantUser = users.find(user => user.email === email && user.password === password);
    if (relevantUser) {
      dispatch(setLoginError(false));
      dispatch(setLoggedInUser(relevantUser));
      localStorage.setItem("userId", relevantUser._id);
      navigate("/home");
    } else {
      dispatch(setLoginError(true));
      console.log(users);
    }
  }

  const navigateSignup = () => {
    navigate("/signup");
  }

  return (
    <div className="login-page-container">
      <label className="login-page-label">Email:</label>
      <input className="login-page-input" type="text" onChange={handleEmailChange} />
      <label className="login-page-label">Password:</label>
      <input className="login-page-input" type="password" onChange={handlePasswordChange} />
      <button className="login-page-submit-button" onClick={handleLogin}>Login</button>
      {
      loginError && 
      <div className="login-error-and-signup-container">
      <LoginError />
      <button className="login-page-signup-button" onClick={navigateSignup}>Sign up</button>
      </div>
      }
    </div>
  )
}

export default Login;