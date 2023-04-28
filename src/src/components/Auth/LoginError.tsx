import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoginError } from '../../redux/authSlice';
import '../../styling/Auth/LoginError.scss';

const LoginError = () => {

  const dispatch = useDispatch();

  const closeLoginError = () => {
    dispatch(setLoginError(false));
  }

  return (
    <div className="login-error-container">
      <button className="loggin-error-button" onClick={closeLoginError}>X</button>
      <div className="login-error-text">Incorrect email or password. Please create an account if you haven't already</div>
    </div>
  )
}

export default LoginError;