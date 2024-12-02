// import React from "react";
// import "../component/LoginPage.css";

// const LoginPage = () => {
//   return (
//     <div className="container-fluid bg-gradient">
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
//         <div className="container">
//           <a className="navbar-brand fw-bold" href="/">
//             BUSINESS COMPANY
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <a className="nav-link active" href="/">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/services">
//                   Services
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/about">
//                   About Us
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/contact">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="d-flex align-items-center vh-100">
//         <div className="container">
//           <div className="row justify-content-center">
//             {/* Left Section */}
//             <div className="col-md-6 text-white d-none d-md-flex flex-column justify-content-center">
//               <h1 className="display-4 fw-bold">Welcome Back!</h1>
//               <p className="lead">
//                 We are thrilled to see you again. Log in to access your account and continue exploring our services.
//               </p>
//               <img
//                 src="https://via.placeholder.com/400x300"
//                 alt="Welcome illustration"
//                 className="img-fluid rounded shadow"
//               />
//             </div>

//             {/* Right Section */}
//             <div className="col-md-6">
//               <div className="card shadow-lg p-4">
//                 <h3 className="text-center mb-4 fw-bold">Login</h3>
//                 <p className="text-center text-muted mb-4">
//                   Enter your credentials to access your account.
//                 </p>
//                 <form>
//                   <div className="mb-3">
//                     <label htmlFor="username" className="form-label">
//                       Username
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="username"
//                       placeholder="Enter your username"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="password" className="form-label">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="password"
//                       placeholder="Enter your password"
//                     />
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <div>
//                       <input
//                         type="checkbox"
//                         id="rememberMe"
//                         className="form-check-input me-2"
//                       />
//                       <label htmlFor="rememberMe" className="form-check-label">
//                         Remember Me
//                       </label>
//                     </div>
//                     <button
//                       className="btn btn-link p-0 text-decoration-none"
//                       onClick={() => console.log("Navigate to forgot password")}
//                     >
//                       Forgot Password?
//                     </button>
//                   </div>
//                   <button type="submit" className="btn btn-primary w-100">
//                     Login
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="text-center text-white mt-auto py-3">
//         <small>Designed with ❤️ by Abinash</small>
//       </footer>
//     </div>
//   );
// };

// export default LoginPage;

import React from "react";
import "../component/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="container-fluid bg-gradient">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            BUSINESS COMPANY
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
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="d-flex align-items-center vh-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left Section */}
            <div className="col-md-6 text-white d-none d-md-flex flex-column justify-content-center">
              <h1 className="display-4 fw-bold">Welcome Back!</h1>
              <p className="lead">
                We are thrilled to see you again. Log in to access your account and continue exploring our services.
              </p>
              <img
                src="https://via.placeholder.com/400x300"
                alt="Welcome illustration"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right Section */}
            <div className="col-md-6">
              <div className="card shadow-lg p-4">
                <h2 className="text-center mb-4 fw-bold ">Login</h2>
                <p className="text-center text-muted mb-4">
                  Enter your credentials to access your account.
                </p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>  
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="d-flex justify-content-end mb-3">
                    <button
                      className="btn btn-link p-0 text-decoration-none"
                      onClick={() => console.log("Navigate to forgot password")}
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-white mt-auto py-3">
        <small>Designed with ❤️ by Abinash</small>
      </footer>
    </div>
  );
};

export default LoginPage;
  