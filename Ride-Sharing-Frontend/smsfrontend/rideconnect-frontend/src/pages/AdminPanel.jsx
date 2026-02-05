import React, { useState } from "react";

const AdminPanel = () => {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("allUsers")) || []);
  
  const handleApproval = (email, status) => {
    const updatedUsers = users.map(user =>
      user.email === email ? { ...user, approved: status } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("allUsers", JSON.stringify(updatedUsers));
    alert(`User ${status ? "approved" : "rejected"} successfully!`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ color: "#023e8a", marginBottom: "1rem" }}>Admin Panel</h1>
      <p>Review and approve user registrations</p>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#0077b6", color: "white" }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Role</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #ccc" }}>
                <td style={tdStyle}>{u.name}</td>
                <td style={tdStyle}>{u.email}</td>
                <td style={tdStyle}>{u.role}</td>
                <td style={tdStyle}>{u.approved ? "✅ Approved" : "⏳ Pending"}</td>
                <td style={tdStyle}>
                  {!u.approved && (
                    <button
                      onClick={() => handleApproval(u.email, true)}
                      style={approveBtn}
                    >
                      Approve
                    </button>
                  )}
                  <button
                    onClick={() => handleApproval(u.email, false)}
                    style={rejectBtn}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const thStyle = { padding: "0.8rem", textAlign: "left" };
const tdStyle = { padding: "0.8rem" };
const approveBtn = {
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  cursor: "pointer",
  marginRight: "0.5rem",
};
const rejectBtn = {
  backgroundColor: "#dc3545",
  color: "white",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: "6px",
  cursor: "pointer",
};

export default AdminPanel;
