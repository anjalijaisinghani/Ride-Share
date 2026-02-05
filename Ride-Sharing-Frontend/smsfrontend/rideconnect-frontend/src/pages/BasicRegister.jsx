import React, { useState } from "react";

const BasicRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a temporary password
    const tempPassword = Math.random().toString(36).slice(-8);

    const newUser = {
      ...formData,
      tempPassword,
      role: null,
      approved: false,
      activated: false,
    };

    // Save to localStorage
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    localStorage.setItem("allUsers", JSON.stringify([...allUsers, newUser]));

    alert(
      `✅ Registration initiated!\n\nTemporary password: ${tempPassword}\n(Imagine this was sent via email with activation link)`
    );

    // In a real app → send activation email from backend
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register for RideConnect</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Register
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

export default BasicRegister;
