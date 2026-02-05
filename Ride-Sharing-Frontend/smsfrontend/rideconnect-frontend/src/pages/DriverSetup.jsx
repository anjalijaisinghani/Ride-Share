import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DriverSetup = () => {
  const navigate = useNavigate();
  const [driverData, setDriverData] = useState({
    vehicleType: "",
    vehicleNumber: "",
    licenseNumber: "",
    vehicleImages: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "vehicleImages") {
      setDriverData({ ...driverData, vehicleImages: Array.from(files) });
    } else {
      setDriverData({ ...driverData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate storing in localStorage
    const existingUser = JSON.parse(localStorage.getItem("user"));
    const updatedUser = {
      ...existingUser,
      role: "driver",
      driverDetails: driverData,
      approved: false, // waiting for admin approval
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("✅ Driver details submitted! Waiting for admin approval.");
    navigate("/");
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        <h2 style={styles.title}>Driver Account Setup</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Vehicle Type</label>
          <select
            name="vehicleType"
            value={driverData.vehicleType}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="">Select Vehicle Type</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Auto">Auto</option>
          </select>

          <label style={styles.label}>Vehicle Number</label>
          <input
            type="text"
            name="vehicleNumber"
            placeholder="e.g., MH12AB1234"
            value={driverData.vehicleNumber}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>License Number</label>
          <input
            type="text"
            name="licenseNumber"
            placeholder="Enter License Number"
            value={driverData.licenseNumber}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Upload Vehicle Images (2–3)</label>
          <input
            type="file"
            name="vehicleImages"
            multiple
            accept="image/*"
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Submit for Approval
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    backgroundColor: "#f5f7fa",
  },
  card: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    width: "400px",
  },
  title: {
    textAlign: "center",
    color: "#023e8a",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  label: {
    color: "#023e8a",
    fontWeight: "600",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#0077b6",
    color: "#fff",
    padding: "0.9rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "1rem",
  },
};

export default DriverSetup;
