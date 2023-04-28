import React from 'react';
import { useDispatch } from 'react-redux';
import { setPasswordsNotMatching } from '../../redux/authSlice';
import '../../styling/Auth/PasswordsError.scss';

const PasswordsError = () => {

  const dispatch = useDispatch();

  const closeErrorWarning = () => {
    dispatch(setPasswordsNotMatching(false));
  }

  return (
    <div className="passwords-error-container">
      <button className="passwords-error-button" onClick={closeErrorWarning}>X</button>
      <div className="passwords-error-text">Passwords do not match, please make sure that you are typing the same password twice</div>
    </div>
  )
}

export default PasswordsError;