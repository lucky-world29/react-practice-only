import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import "./App.css";
import ImageTextSection from "./components/ImageTextSection";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ImageTextSection/>
      <Footer />
    </>
  );
};

export default App;
