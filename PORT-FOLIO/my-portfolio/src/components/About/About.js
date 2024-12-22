import React, { useEffect, useRef } from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const currentAboutRef = aboutRef.current; // Store the current value of the ref

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentAboutRef?.classList.add("animate-scroll");
        } else {
          currentAboutRef?.classList.remove("animate-scroll");
        }
      },
      { threshold: 0.1 }
    );

    if (currentAboutRef) {
      observer.observe(currentAboutRef);
    }

    return () => {
      if (currentAboutRef) {
        observer.unobserve(currentAboutRef);
      }
    };
  }, []); // No dependencies needed in this case

  return (
    <section className="about py-5" id="about" ref={aboutRef}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src="https://i.pinimg.com/736x/33/89/a1/3389a10de17631503e40e00c8e3f557f.jpg"
              alt="About"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6">
            <h2>About Me</h2>
            <p>FULL STACK DEVELOPER</p>
            <p>
              I am Lucky, a passionate developer with experience in building web
              and mobile applications.
            </p>
            <button className="btn btn-primary me-3">Download C.V</button>
            <button className="btn btn-outline-secondary">
              <Link to="/about#about-section" className="about-link">
                About Us
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
