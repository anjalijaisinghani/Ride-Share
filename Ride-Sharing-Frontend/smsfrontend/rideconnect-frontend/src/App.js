// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Footer from "./components/Footer";
// // // import Dashboard from "./pages/Dashboard";
// // // import HostRide from "./pages/HostRide";
// // // import JoinRide from "./pages/JoinRide";
// // // import AuthPage from "./pages/AuthPage"; // ✅ Combined Login/Register page

// // // const App = () => {
// // //   return (
// // //     <Router>
// // //       <div style={{ minHeight: "100vh", paddingBottom: "3rem" }}>
// // //         <Navbar />

// // //         <Routes>
// // //           {/* Default route → open Login/Register first */}
// // //           <Route path="/" element={<Navigate to="/auth" />} />

// // //           {/* Authentication Page */}
// // //           <Route path="/auth" element={<AuthPage />} />

// // //           {/* Other Pages */}
// // //           <Route path="/dashboard" element={<Dashboard />} />
// // //           <Route path="/host" element={<HostRide />} />
// // //           <Route path="/join" element={<JoinRide />} />

// // //           {/* Fallback route for undefined paths */}
// // //           <Route path="*" element={<Navigate to="/auth" />} />
// // //         </Routes>

// // //         <Footer />
// // //       </div>
// // //     </Router>
// // //   );
// // // };

// // // export default App;
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";
// // import Dashboard from "./pages/Dashboard";
// // import HostRide from "./pages/HostRide";
// // import JoinRide from "./pages/JoinRide";
// // import AuthPage from "./pages/AuthPage";

// // const App = () => {
// //   return (
// //     <Router>
// //       <div style={{ minHeight: "100vh", paddingBottom: "3rem" }}>
// //         <Navbar />

// //         <Routes>
// //           <Route path="/" element={<Navigate to="/auth" />} />
// //           <Route path="/auth" element={<AuthPage />} />
// //           <Route path="/dashboard" element={<Dashboard />} />
// //           <Route path="/host" element={<HostRide />} />
// //           <Route path="/join" element={<JoinRide />} />
// //           <Route path="*" element={<Navigate to="/auth" />} />
// //         </Routes>

// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;


// // src/App.js
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import AuthPage from "./pages/AuthPage";
// import Dashboard from "./pages/Dashboard";
// import HostRide from "./pages/HostRide";
// import JoinRide from "./pages/JoinRide";
// import AdminPanel from "./pages/AdminPanel"; // You'll create this next

// function App() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <Router>
//       {/* Show Navbar/Footer only if logged in */}
//       {user && <Navbar />}
//       <Routes>
//         <Route path="/" element={<AuthPage />} />
//         <Route
//           path="/dashboard"
//           element={user ? <Dashboard /> : <Navigate to="/" />}
//         />
//         <Route
//           path="/host"
//           element={
//             user && user.role === "driver" ? (
//               <HostRide />
//             ) : (
//               <Navigate to="/dashboard" />
//             )
//           }
//         />
//         <Route
//           path="/join"
//           element={
//             user && user.role === "passenger" ? (
//               <JoinRide />
//             ) : (
//               <Navigate to="/dashboard" />
//             )
//           }
//         />
//         <Route path="/admin" element={<AdminPanel />} />
//       </Routes>
//       {user && <Footer />}
//     </Router>
//   );
// }

// export default App;

// src/App.js

// Create default admin if not exists

// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import AuthPage from "./pages/AuthPage";
// import Dashboard from "./pages/Dashboard";
// import HostRide from "./pages/HostRide";
// import JoinRide from "./pages/JoinRide";
// import AdminPanel from "./pages/AdminPanel";

// const defaultAdmin = {
//   name: "System Admin",
//   email: "admin@rideconnect.com",
//   password: "admin123",
//   role: "admin",
//   approved: true,
//   passwordChanged: true,
// };

// const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
// const hasAdmin = allUsers.some((u) => u.role === "admin");

// if (!hasAdmin) {
//   localStorage.setItem("allUsers", JSON.stringify([...allUsers, defaultAdmin]));
// }

// // Wrapper to manage Navbar/Footer visibility
// function LayoutWrapper({ children }) {
//   const location = useLocation();
//   const user = JSON.parse(localStorage.getItem("user"));

//   // Hide Navbar & Footer on AuthPage (/)
//   const hideLayout = location.pathname === "/";

//   return (
//     <>
//       {!hideLayout && user && <Navbar />}
//       {children}
//       {!hideLayout && user && <Footer />}
//     </>
//   );
// }

// function AppRoutes() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <Routes>
//       {/* Auth page (Login / Register) */}
//       <Route path="/" element={<AuthPage />} />

//       {/* Role-based pages */}
//       <Route
//         path="/dashboard"
//         element={user ? <Dashboard /> : <Navigate to="/" />}
//       />
//       <Route
//         path="/host"
//         element={
//           user && user.role === "driver" ? (
//             <HostRide />
//           ) : (
//             <Navigate to="/dashboard" />
//           )
//         }
//       />
//       <Route
//         path="/join"
//         element={
//           user && user.role === "passenger" ? (
//             <JoinRide />
//           ) : (
//             <Navigate to="/dashboard" />
//           )
//         }
//       />
//       <Route
//         path="/admin"
//         element={
//           user && user.role === "admin" ? (
//             <AdminPanel />
//           ) : (
//             <Navigate to="/dashboard" />
//           )
//         }
//       />
//     </Routes>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <LayoutWrapper>
//         <AppRoutes />
//       </LayoutWrapper>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Existing Pages
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import HostRide from "./pages/HostRide";
import JoinRide from "./pages/JoinRide";
import AdminPanel from "./pages/AdminPanel";

// ✅ New Pages for Registration Flow
import BasicRegister from "./pages/BasicRegister";
import ActivateAccount from "./pages/ActivateAccount";
import DriverSetup from "./pages/DriverSetup";
import PassengerSetup from "./pages/PassengerSetup";

function App() {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Main Content */}
      <div style={{ minHeight: "90vh", backgroundColor: "#f5f7fa" }}>
        <Routes>
          {/* 🧾 Authentication and Core Pages */}
          <Route path="/" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/host" element={<HostRide />} />
          <Route path="/join" element={<JoinRide />} />

          {/* 👑 Admin */}
          <Route path="/admin" element={<AdminPanel />} />

          {/* 🆕 Registration + Activation Flow */}
          <Route path="/register" element={<BasicRegister />} />
          <Route path="/activate" element={<ActivateAccount />} />
          <Route path="/driver-setup" element={<DriverSetup />} />
          <Route path="/passenger-setup" element={<PassengerSetup />} />

          {/* ⚠️ Fallback route */}
          <Route
            path="*"
            element={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "80vh",
                  color: "#023e8a",
                  fontSize: "1.5rem",
                }}
              >
                404 — Page Not Found
              </div>
            }
          />
        </Routes>
      </div>

      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;

