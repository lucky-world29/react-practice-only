
import React from "react";
import "./HeroSection.css";
// import heroImage from "../../public/images/hero.jpg";

const HeroSection = () => {
  return (
    <section
      className="hero"
      id="home"
      // style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <h1>Welcome to MyWebsite</h1>
        <p>Your one-stop solution for modern web experiences.</p>
        <a href="#features" className="hero-btn">Learn More</a>
      </div>
    </section>
  );
};

export default HeroSection;
 
