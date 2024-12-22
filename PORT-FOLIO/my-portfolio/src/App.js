// import React from "react";
// import Navbar from './components/Navbar/Navbar'; // Correct for default export
// import HeroSection from "./components/HeroSection/HeroSection";
// import About from "./components/About/About";
// import Services from "./components/Services/Services";
// // import Portfolio from "./components/Portfolio/Portfolio";
// import Blog from "./components/Blog/Blog";
// import Footer from "./components/Footer/Footer";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
//      <About />
//       <Services />
//      {/* <Portfolio /> */}
//        <Blog />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Correct for default export
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./components/About/Contact"; // Assuming a Contact component exists

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Define routes for each section */}
          {/* <Route path="/" element={<HeroSection />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
             <HeroSection />
              <About />
              <Services />
            <Portfolio />
               {/* <Blog /> */}
              <Contact/>
               <Footer />  
      </div>
    </Router>
  );
}

export default App;

