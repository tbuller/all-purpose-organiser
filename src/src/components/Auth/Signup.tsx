import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignupProps {
  navigate: ReturnType<typeof useNavigate>
}

const Signup: React.FC<SignupProps> = ({ navigate }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordsNotMatching, setPasswordsNotMatching] = useState(false);

  const createUser = () => {
    if (password !== confirmedPassword) {
      console.log("passwords do not match");
      setPasswordsNotMatching(true);
    } else {
      fetch("http://localhost:8080/users", {
        method: "post",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({ email: email, password: password, username: username })
      })
        .then(response => response.json())
        .then(data => console.log(data))
    }
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleConfirmedPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmedPassword(event.target.value);
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  return (
    <div className="signup-page-container">
      <label className="signup-page-label">Email:</label>
      <input className="signup-page-input" type="text" onChange={handleEmailChange} />
      <label className="signup-page-label">Password:</label>
      <input className="signup-page-input" type="password" onChange={handlePasswordChange} />
      <label className="signup-page-label">Confirm password:</label>
      <input className="signup-page-input" type="password" onChange={handleConfirmedPasswordChange} />
      <label className="signup-page-label">Username:</label>
      <input className="signup-page-input" type="text" onChange={handleUsernameChange} />
      <button onClick={createUser}>Create account</button>
    </div>
  )
}

export default Signup;