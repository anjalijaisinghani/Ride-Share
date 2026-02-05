// const Dashboard = () => (
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       padding: "4rem 6rem",
//       backgroundColor: "#f8f9fa",
//       minHeight: "20vh",
//       flexWrap: "wrap",
//       gap: "2rem",
//     }}
//   >
//     {/* Left Section (Text) */}
//     <div
//       style={{
//         flex: "1 1 45%",
//         minWidth: "300px",
//       }}
//     >
//       <h1
//         style={{
//           fontSize: "3rem",
//           fontWeight: "700",
//           marginBottom: "1rem",
//           color: "#023e8a",
//         }}
//       >
//         Welcome to RideConnect
//       </h1>

//       <p
//         style={{
//           fontSize: "1.2rem",
//           color: "#495057",
//           marginBottom: "2rem",
//           lineHeight: "1.6",
//         }}
//       >
//         Simplify your travel — connect with drivers or passengers nearby.
//         Whether you want to host a ride or join one, RideConnect makes it quick,
//         easy, and affordable.
//       </p>

//       <div style={{ display: "flex", gap: "1rem" }}>
//         <a
//           href="/join"
//           style={{
//             backgroundColor: "#0077b6",
//             color: "white",
//             padding: "0.9rem 1.6rem",
//             borderRadius: "8px",
//             textDecoration: "none",
//             fontWeight: "600",
//             transition: "all 0.3s ease",
//           }}
//           onMouseEnter={(e) => (e.target.style.backgroundColor = "#005f8c")}
//           onMouseLeave={(e) => (e.target.style.backgroundColor = "#0077b6")}
//         >
//           Join a Ride
//         </a>
//         <a
//           href="/host"
//           style={{
//             backgroundColor: "#023e8a",
//             color: "white",
//             padding: "0.9rem 1.6rem",
//             borderRadius: "8px",
//             textDecoration: "none",
//             fontWeight: "600",
//             transition: "all 0.3s ease",
//           }}
//           onMouseEnter={(e) => (e.target.style.backgroundColor = "#001f54")}
//           onMouseLeave={(e) => (e.target.style.backgroundColor = "#023e8a")}
//         >
//           Host a Ride
//         </a>
//       </div>
//     </div>

//     {/* Right Section (Image) */}
//     <div
//       style={{
//         flex: "1 1 45%",
//         display: "flex",
//         justifyContent: "flex-end", // aligns image to the right
//         alignItems: "center",
//         minWidth: "300px",
//       }}
//     >
//       <img
//         src="https://www.uberapps.tech/blog/images/top-leading-ride-sharing-apps.jpg"
//         alt="Ride Sharing"
//         style={{
//           width: "500px",
//           height: "400px",
//           borderRadius: "16px",
//           objectFit: "cover",
//           boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//         }}
//       />
//     </div>
//   </div>
// );

// export default Dashboard;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else if (user.role === "driver") {
      navigate("/host");
    } else if (user.role === "passenger") {
      navigate("/join");
    } else if (user.role === "admin") {
      navigate("/admin");
    }
  }, [navigate, user]);

  return (
    <div style={{ textAlign: "center", padding: "5rem" }}>
      <h2>Redirecting to your dashboard...</h2>
    </div>
  );
};

export default Dashboard;









