import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from '../../firebase';
import logo from "../../logo.png";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(error => {
      alert(error.message);
    });
  };
  return (
    <div className='login'>
      <div className='login__logo'>
        <div className="logo2">
        <img
         className="slika"
         src={logo}
         alt='iMessage logo'
       />
        </div>
        
        <h1>Smart University</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
