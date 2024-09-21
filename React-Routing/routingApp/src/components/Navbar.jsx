
import React from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
        <NavLink
            style={({ isActive }) => ({
              color: isActive ? "Green" : "#61dafb",
              textDecoration: "none",
              fontSize: "18px",
            })}
            to="/"
          >
            Home
          </NavLink>
          
        </li>
        <li style={styles.li}> 
        <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#61dafb",
              textDecoration: "none",
              fontSize: "18px",
            })}
            to="/avi"
          >
            Avi
          </NavLink>
        </li>
        <li style={styles.li}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#61dafb",
              textDecoration: "none",
              fontSize: "18px",
            })}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li style={styles.li}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#61dafb",
              textDecoration: "none",
              fontSize: "18px",
            })}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    background: "#282c34",
    padding: "10px",
    float : "right"
  },
  ul: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
  },
  li: {
    margin: "0 15px",
  },
  link: {
    color: "#61dafb",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;
