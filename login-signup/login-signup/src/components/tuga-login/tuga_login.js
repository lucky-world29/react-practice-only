import React from "react";
import "../tuga-login/tuga_login.css";
import illustration from "../Assets/illustration.jpg"; // Adjust the path to the uploaded image

function tuga_login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1 className="login-title">Welcome back!</h1>
        <p className="login-subtitle">
          Simplify your workflow and boost your productivity with Tuga's App. Get started for free.
        </p>
        <form className="login-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              className="login-input"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="divider">or continue with</div>
        <div className="social-login">
          <button className="social-button google">G</button>
          <button className="social-button facebook">F</button>
          <button className="social-button apple">A</button>
        </div>
        <div className="signup-link">
          Not a member? <a href="/signup">Register now</a>
        </div>
      </div>
      <div className="login-right">
        <img src={illustration} alt="Illustration" className="login-illustration" />
        <p className="login-caption">
          Make your work easier and organized with Tuga's App
        </p>
      </div>
    </div>
  );
}

export default tuga_login;
