import React from "react";
import { useNavigate } from "react-router-dom";

const PassengerSetup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUser = JSON.parse(localStorage.getItem("user"));
    const updatedUser = {
      ...existingUser,
      role: "passenger",
      approved: false,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("✅ Passenger profile created! Waiting for admin approval.");
    navigate("/");
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        <h2 style={styles.title}>Passenger Account Setup</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <p style={styles.infoText}>
            Please confirm your passenger profile. Once approved by admin, you’ll
            be able to join rides.
          </p>
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
    textAlign: "center",
  },
  title: {
    color: "#023e8a",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  infoText: {
    color: "#333",
    marginBottom: "1rem",
  },
  button: {
    backgroundColor: "#0077b6",
    color: "#fff",
    padding: "0.9rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default PassengerSetup;
