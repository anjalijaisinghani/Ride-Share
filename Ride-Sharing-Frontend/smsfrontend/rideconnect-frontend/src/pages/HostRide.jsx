// import { useState } from "react";

// const HostRide = () => {
//   const [ride, setRide] = useState({
//     from: "",
//     to: "",
//     date: "",
//     time: "",
//     seats: "",
//     fare: "",
//   });

//   const handleChange = (e) =>
//     setRide({ ...ride, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Ride posted:", ride);
//     alert("✅ Your ride has been posted successfully!");
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         backgroundColor: "#f9fafc",
//         minHeight: "100vh",
//         paddingLeft: "6rem",
//         paddingRight: "0", // image touches right edge
//         gap: "2rem",
//       }}
//     >
//       {/* Left Side - Form */}
//       <div style={{ flex: 1, paddingRight: "3rem" }}>
//         <h1 style={{ color: "#023e8a", fontSize: "2.5rem", marginBottom: "1rem" }}>
//           Host a Ride
//         </h1>
//         <p style={{ color: "#555", marginBottom: "2rem", fontSize: "1.1rem" }}>
//           Offer a ride and earn by helping others travel conveniently.
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "1rem",
//           }}
//         >
//           <input
//             name="from"
//             placeholder="From"
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//           <input
//             name="to"
//             placeholder="To"
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//           <input
//             name="date"
//             type="date"
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//           <input
//             name="time"
//             type="time"
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//           <input
//             name="seats"
//             type="number"
//             placeholder="Available Seats"
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//           <input
//             name="fare"
//             type="number"
//             placeholder="Fare per Seat"
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />

//           <button
//             type="submit"
//             style={buttonStyle}
//             onMouseOver={(e) => (e.target.style.backgroundColor = "#023e8a")}
//             onMouseOut={(e) => (e.target.style.backgroundColor = "#0077b6")}
//           >
//             Submit Ride
//           </button>
//         </form>
//       </div>

//       {/* Right Side - Image */}
//       <div
//         style={{
//           flex: 1,
//           display: "flex",
//           justifyContent: "flex-end", // pushes image to rightmost edge
//           alignItems: "center",
//           marginRight: "0",
//         }}
//       >
//         <img
//           src="https://s.yimg.com/ny/api/res/1.2/h2UmQz1EB4tmYPtyKlH92g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/2171818d82a70b51ae766e7635458bb7"
//           alt="Host Ride"
//           style={{
//             width: "100%",
//             maxWidth: "500px",
//             height: "450px",
//             borderRadius: "10px",
//             objectFit: "cover",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// const inputStyle = {
//   padding: "0.8rem",
//   borderRadius: "6px",
//   border: "1px solid #ccc",
//   fontSize: "1rem",
//   width: "100%",
// };

// const buttonStyle = {
//   backgroundColor: "#0077b6",
//   color: "white",
//   border: "none",
//   padding: "0.9rem 1.5rem",
//   fontSize: "1rem",
//   borderRadius: "8px",
//   cursor: "pointer",
//   transition: "background-color 0.3s ease",
// };

// export default HostRide;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HostRide = () => {
  const navigate = useNavigate();

  // Ride details
  const [ride, setRide] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    seats: "",
  });

  // Vehicle details (fetched from backend)
  const [vehicle, setVehicle] = useState({
    vehicleNumber: "",
    vehicleModel: "",
    vehicleType: "",
  });

  // Fetch vehicle details from backend when component mounts
  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/drivers/vehicle"); // replace with your API
        if (!response.ok) throw new Error("Failed to fetch vehicle details");

        const data = await response.json();
        setVehicle(data);
      } catch (error) {
        console.error("Error fetching vehicle details:", error);
        alert("⚠️ Could not load vehicle details.");
      }
    };

    fetchVehicle();
  }, []);

  // Handle ride input changes
  const handleChange = (e) => {
    setRide({ ...ride, [e.target.name]: e.target.value });
  };

  // Submit ride to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const rideData = { ...ride, vehicle };

    try {
      const response = await fetch("http://localhost:8080/api/rides", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rideData),
      });

      if (response.ok) {
        alert("✅ Ride posted successfully!");
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        alert("❌ Failed to post ride: " + errorData.message);
      }
    } catch (error) {
      console.error("Error posting ride:", error);
      alert("⚠️ Something went wrong while posting ride.");
    }
  };

  return (
    <div style={containerStyle}>
      {/* Left Side - Ride Form */}
      <div style={formContainer}>
        <h1 style={titleStyle}>Post a Ride</h1>
        <p style={subtitleStyle}>Share your route and help others travel!</p>

        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            name="from"
            placeholder="From (Source)"
            value={ride.from}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="to"
            placeholder="To (Destination)"
            value={ride.to}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="date"
            type="date"
            value={ride.date}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="time"
            type="time"
            value={ride.time}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="seats"
            type="number"
            placeholder="Available Seats"
            value={ride.seats}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* Vehicle Details */}
          <div style={vehicleContainer}>
            <h3 style={vehicleTitle}>Vehicle Details (from Profile)</h3>
            <div style={vehicleInfo}>
              <p><strong>Number:</strong> {vehicle.vehicleNumber}</p>
              <p><strong>Model:</strong> {vehicle.vehicleModel}</p>
              <p><strong>Type:</strong> {vehicle.vehicleType}</p>
            </div>
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#023e8a")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#0077b6")}
          >
            Submit Ride
          </button>
        </form>

        <button onClick={() => navigate("/dashboard")} style={backButton}>
          ← Back to Dashboard
        </button>
      </div>

      {/* Right Side - Illustration */}
      <div style={imageContainer}>
        <img
          src="https://s.yimg.com/ny/api/res/1.2/h2UmQz1EB4tmYPtyKlH92g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/gobankingrates_644/2171818d82a70b51ae766e7635458bb7"
          alt="Post a Ride"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

/* Styles */
const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#f8fafc",
  minHeight: "100vh",
  padding: "3rem 5rem",
  gap: "3rem",
};

const formContainer = { flex: 1 };
const titleStyle = { color: "#023e8a", fontSize: "2.5rem", marginBottom: "0.5rem" };
const subtitleStyle = { color: "#555", marginBottom: "2rem" };
const formStyle = { display: "flex", flexDirection: "column", gap: "1rem" };

const inputStyle = {
  padding: "0.9rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  width: "100%",
};

const vehicleContainer = {
  marginTop: "1.5rem",
  backgroundColor: "#e8f4fa",
  padding: "1rem",
  borderRadius: "8px",
};

const vehicleTitle = {
  marginBottom: "0.5rem",
  color: "#0077b6",
  fontWeight: "600",
};

const vehicleInfo = {
  fontSize: "0.95rem",
  lineHeight: "1.6",
  color: "#333",
};

const buttonStyle = {
  backgroundColor: "#0077b6",
  color: "white",
  border: "none",
  padding: "0.9rem 1.5rem",
  fontSize: "1rem",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "1rem",
  transition: "background-color 0.3s ease",
};

const backButton = {
  marginTop: "1.5rem",
  backgroundColor: "transparent",
  border: "none",
  color: "#023e8a",
  textDecoration: "underline",
  cursor: "pointer",
  fontSize: "1rem",
};

const imageContainer = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageStyle = {
  width: "100%",
  maxWidth: "500px",
  borderRadius: "12px",
  objectFit: "cover",
};

export default HostRide;
