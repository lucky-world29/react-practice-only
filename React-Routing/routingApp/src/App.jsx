import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Avi from "./components/Avi";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <main>
        <img src={reactLogo} alt="React logo" />
        <img src={viteLogo} alt="Vite logo" />
     </main> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/avi" element={<Avi />} />
      </Routes>
    </Router>
  );
}

export default App;
