import React from "react";
import "../LogIn-AccountPlus/Login_Page_Account_Plus.css";

function Login_Page_Account_Plus() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <img
            src="https://via.placeholder.com/300" // Replace with your image URL
            alt="Character"
            className="login-illustration"
          />
        </div>
        <div className="login-right">
          <h1 className="login-title">Login</h1>
          <form className="login-form">
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="login-input"
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="login-input"
              />
            </div>
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="login-button">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login_Page_Account_Plus;
