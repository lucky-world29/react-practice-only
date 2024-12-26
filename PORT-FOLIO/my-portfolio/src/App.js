
// import React, { useRef } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import HeroSection from "./components/HeroSection/HeroSection";
// import About from "./components/About/About";
// import Services from "./components/Services/Services";
// import Blog from "./components/Blog/Blog";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Footer from "./components/Footer/Footer";
// import Contact from "./components/About/Contact";

// function App() {
//     const footerRef = useRef(null);

//     return (
//         <Router>
//             <div>
//                 <Navbar />
//                 <Routes>
//                     <Route path="/blog" element={<Blog />} />
//                 </Routes>
//                 <HeroSection />
//                 <About footerRef={footerRef} />
//                 <Services />
//                 <Portfolio />
//                 <Contact />
//                 <div ref={footerRef}>
//                     <Footer />
//                 </div>
//             </div>
//         </Router>
//     );
// }

// export default App;

import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./components/About/Contact";

function App() {
    const footerRef = useRef(null);

    return (
        <Router>
            <div>
                <Routes>
                    {/* Route for Blog page */}
                    <Route 
                        path="/blog" 
                        element={
                            <>
                                <Navbar />
                                <Blog />
                                <Footer />
                            </>
                        } 
                    />
                    {/* Other routes for other pages */}
                    <Route 
                        path="/" 
                        element={
                            <>
                                <Navbar />
                                <HeroSection />
                                <About footerRef={footerRef} />
                                <Services />
                                <Portfolio />
                                <Contact />
                                <div ref={footerRef}>
                                    <Footer />
                                </div>
                            </>
                        } 
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
