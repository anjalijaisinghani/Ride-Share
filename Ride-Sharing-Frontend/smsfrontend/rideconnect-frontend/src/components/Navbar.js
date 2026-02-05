
// import { NavLink } from "react-router-dom";

// const Navbar = () => (
//   <nav
//     style={{
//       padding: "1rem 1.5rem",
//       background: "#0b86c4f5",
//       color: "white",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     }}
//   >
//     {/* Left side: Logo + Title */}
//     <div style={{ display: "flex", alignItems: "center" }}>
//       <img
//         src="https://static.vecteezy.com/system/resources/previews/046/303/584/original/ride-sharing-logo-design-illustration-symbol-template-flat-style-vector.jpg"
//         alt="RideConnect Logo"
//         style={{
//           width: "45px",
//           height: "45px",
//           marginRight: "10px",
//           borderRadius: "8px",
//         }}
//       />
//       <h2 style={{ fontSize: "2rem", margin: 0 }}>RideConnect</h2>
//     </div>

//     {/* Right side: Navigation Links */}
//     <div style={{ display: "flex", alignItems: "center" }}>
//       {[
//         { to: "/", text: "Dashboard" },
//         // { to: "/register", text: "Register" },
//         // { to: "/login", text: "Login" },
//         // { to: "/host", text: "Host Ride" },
//         // { to: "/join", text: "Join Ride" },
//       ].map((link) => (
//         <NavLink
//           key={link.to}
//           to={link.to}
//           style={({ isActive }) => ({
//             margin: "0 1rem",
//             color: isActive ? "#ffd700" : "white", // Highlight active link
//             textDecoration: isActive ? "underline" : "none",
//             fontSize: "1.1rem",
//             transition: "0.3s",
//           })}
//         >
//           {link.text}
//         </NavLink>
//       ))}
//     </div>
//   </nav>
// );

// export default Navbar;

import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav
      style={{
        padding: "1rem 1.5rem",
        background: "#0b86c4f5",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left side: Logo + Title */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/046/303/584/original/ride-sharing-logo-design-illustration-symbol-template-flat-style-vector.jpg"
          alt="RideConnect Logo"
          style={{
            width: "45px",
            height: "45px",
            marginRight: "10px",
            borderRadius: "8px",
          }}
        />
        <h2 style={{ fontSize: "2rem", margin: 0 }}>RideConnect</h2>
      </div>

      {/* Right side: Navigation + Admin + Logout */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Regular navigation links (only for logged-in users) */}
        {user && (
          <>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                margin: "0 1rem",
                color: isActive ? "#ffd700" : "white",
                textDecoration: isActive ? "underline" : "none",
                fontSize: "1.1rem",
                transition: "0.3s",
              })}
            >
              Dashboard
            </NavLink>

            {/* ✅ Admin link — only visible to admin */}
            {user.role === "admin" && (
              <NavLink
                to="/admin"
                style={({ isActive }) => ({
                  margin: "0 1rem",
                  color: isActive ? "#90ee90" : "white",
                  textDecoration: isActive ? "underline" : "none",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  transition: "0.3s",
                })}
              >
                Admin Panel
              </NavLink>
            )}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              style={{
                background: "#dc3545",
                border: "none",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
                marginLeft: "1rem",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




