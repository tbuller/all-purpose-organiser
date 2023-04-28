import React from 'react';
import { useDispatch } from 'react-redux';
import { setPasswordsNotMatching } from '../../redux/authSlice';

const PasswordsError = () => {

  const dispatch = useDispatch();

  const closeErrorWarning = () => {
    dispatch(setPasswordsNotMatching(false));
  }

  return (
    <div className="passwords-error-container">
      <div>Passwords do not match, please try again</div>
      <button onClick={closeErrorWarning}>X</button>
    </div>
  )
}

export default PasswordsError;