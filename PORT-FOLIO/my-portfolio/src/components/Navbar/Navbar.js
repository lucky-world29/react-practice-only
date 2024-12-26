import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="container">
    <a className="navbar-brand" href="#">
  <i className="material-icons">Yo !</i> 
  <img 
    src="https://i.pinimg.com/736x/21/e9/80/21e9802ecaa6c3bdd416a8805e607812.jpg"  
    alt="Logo" 
    className="rounded-circle" 
    style={{ width: '50px', height: '50px', marginLeft: '10px' }}
  />
</a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav" 
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {["Home", "About", "Services", "Portfolio"].map((item) => (
            <li className="nav-item" key={item}>
              <a className="nav-link" href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a 
              className="nav-link" 
              href="/blog" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
