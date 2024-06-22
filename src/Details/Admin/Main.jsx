import React from 'react';
import './Main.css'
import { Link } from 'react-router-dom';

export default function Main() {

  return (
    <div className="mainsection">
    <div className="mainlogin">
      <h1>Login Page</h1>
      <div className="buttonlogin">
        <button className="loginbutton"> 
            <Link to={"/Userlogin"} className="loginlink">User Login</Link>
            </button>
        <button className="loginbutton">
        <Link to={"/AdminLogin"} className="loginlink">Admin Login</Link>
        </button>
      </div>
    </div>
    </div>
  );
}
