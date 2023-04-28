import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateUsers } from '../../redux/usersSlice';
import { setLoggedInUser } from '../../redux/usersSlice';

interface LoginProps {
  navigate: ReturnType<typeof useNavigate>
}

const Login: React.FC<LoginProps> = ({ navigate }) => {

  const dispatch = useDispatch();
  const users = useSelector((state: RootStateUsers) => state.users.users);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page-container">

    </div>
  )
}

export default Login;