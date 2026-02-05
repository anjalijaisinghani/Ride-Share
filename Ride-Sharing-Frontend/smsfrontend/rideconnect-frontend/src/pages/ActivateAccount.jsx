import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ActivateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    tempPassword: "",
    role: "passenger",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    const user = allUsers.find(
      (u) =>
        u.email === formData.email &&
        u.tempPassword === formData.tempPassword
    );

    if (!user) {
      alert("❌ Invalid email or temporary password!");
      return;
    }

    user.role = formData.role;
    user.activated = true;

    const updatedUsers = allUsers.map((u) =>
      u.email === user.email ? user : u
    );
    localStorage.setItem("allUsers", JSON.stringify(updatedUsers));

    alert("✅ Account activated! Continue setup.");
    if (formData.role === "driver") navigate("/driver-setup");
    else navigate("/passenger-setup");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Activate Your Account</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="tempPassword"
          placeholder="Temporary Password"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <select
          name="role"
          onChange={handleChange}
          value={formData.role}
          style={styles.input}
        >
          <option value="passenger">Passenger</option>
          <option value="driver">Driver</option>
        </select>
        <button type="submit" style={styles.button}>
          Continue
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "4rem" },
  title: { color: "#023e8a", marginBottom: "1.5rem" },
  form: { display: "flex", flexDirection: "column", gap: "1rem", width: "300px", margin: "auto" },
  input: { padding: "0.8rem", borderRadius: "6px", border: "1px solid #ccc" },
  button: {
    backgroundColor: "#0077b6",
    color: "white",
    padding: "0.8rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ActivateAccount;
