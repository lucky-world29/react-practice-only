import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg"> {/* Remove navbar-light here */}
    <div className="container">
      <a className="navbar-brand" href="#">
        <i className="material-icons">web</i> Logo
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
          {["Home", "About", "Services", "Portfolio", "Blog"].map((item) => (
            <li className="nav-item" key={item}>
              <a className="nav-link" href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
