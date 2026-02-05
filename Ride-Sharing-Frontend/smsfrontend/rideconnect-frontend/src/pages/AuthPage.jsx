// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const AuthPage = () => {
// //   const [isLogin, setIsLogin] = useState(true); // true = login, false = register
// //   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
// //   const [users, setUsers] = useState([]); // Temporary local user storage
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (isLogin) {
// //       // LOGIN
// //       const existingUser = users.find(
// //         (u) => u.email === formData.email && u.password === formData.password
// //       );
// //       if (existingUser) {
// //         alert("✅ Login successful!");
// //         navigate("/dashboard");
// //       } else {
// //         alert("⚠️ Account not found. Please register first.");
// //       }
// //     } else {
// //       // REGISTER
// //       const alreadyExists = users.some((u) => u.email === formData.email);
// //       if (alreadyExists) {
// //         alert("⚠️ Account already exists. Please login.");
// //         setIsLogin(true);
// //       } else {
// //         setUsers([...users, formData]);
// //         alert("✅ Account created! Please login now.");
// //         setIsLogin(true);
// //       }
// //     }

// //     setFormData({ name: "", email: "", password: "" });
// //   };

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         height: "100vh",
// //         backgroundColor: "#f1f5f9",
// //       }}
// //     >
// //       <div
// //         style={{
// //           width: "400px",
// //           backgroundColor: "white",
// //           padding: "2.5rem",
// //           borderRadius: "12px",
// //           boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
// //         }}
// //       >
// //         <h2 style={{ textAlign: "center", color: "#023e8a", marginBottom: "1.5rem" }}>
// //           {isLogin ? "Login to RideConnect" : "Register for RideConnect"}
// //         </h2>

// //         <form onSubmit={handleSubmit}>
// //           {!isLogin && (
// //             <div style={{ marginBottom: "1rem" }}>
// //               <label style={{ display: "block", marginBottom: "0.5rem" }}>Full Name</label>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //                 style={{
// //                   width: "100%",
// //                   padding: "0.7rem",
// //                   borderRadius: "6px",
// //                   border: "1px solid #ccc",
// //                 }}
// //               />
// //             </div>
// //           )}

// //           <div style={{ marginBottom: "1rem" }}>
// //             <label style={{ display: "block", marginBottom: "0.5rem" }}>Email</label>
// //             <input
// //               type="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //               style={{
// //                 width: "100%",
// //                 padding: "0.7rem",
// //                 borderRadius: "6px",
// //                 border: "1px solid #ccc",
// //               }}
// //             />
// //           </div>

// //           <div style={{ marginBottom: "1rem" }}>
// //             <label style={{ display: "block", marginBottom: "0.5rem" }}>Password</label>
// //             <input
// //               type="password"
// //               name="password"
// //               value={formData.password}
// //               onChange={handleChange}
// //               required
// //               style={{
// //                 width: "100%",
// //                 padding: "0.7rem",
// //                 borderRadius: "6px",
// //                 border: "1px solid #ccc",
// //               }}
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             style={{
// //               width: "100%",
// //               backgroundColor: "#0077b6",
// //               color: "white",
// //               border: "none",
// //               padding: "0.8rem",
// //               borderRadius: "6px",
// //               cursor: "pointer",
// //               fontSize: "1rem",
// //               fontWeight: "600",
// //             }}
// //           >
// //             {isLogin ? "Login" : "Register"}
// //           </button>
// //         </form>

// //         <p style={{ textAlign: "center", marginTop: "1rem" }}>
// //           {isLogin ? (
// //             <>
// //               Don't have an account?{" "}
// //               <span
// //                 style={{ color: "#0077b6", cursor: "pointer", fontWeight: "600" }}
// //                 onClick={() => setIsLogin(false)}
// //               >
// //                 Register
// //               </span>
// //             </>
// //           ) : (
// //             <>
// //               Already have an account?{" "}
// //               <span
// //                 style={{ color: "#0077b6", cursor: "pointer", fontWeight: "600" }}
// //                 onClick={() => setIsLogin(true)}
// //               >
// //                 Login
// //               </span>
// //             </>
// //           )}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AuthPage;
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const AuthPage = () => {
// //   const navigate = useNavigate();
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (isLogin) {
// //       // Simple login simulation
// //       const storedUser = JSON.parse(localStorage.getItem("user"));
// //       if (
// //         storedUser &&
// //         storedUser.email === formData.email &&
// //         storedUser.password === formData.password
// //       ) {
// //         alert("✅ Login successful!");
// //         navigate("/dashboard"); // ✅ Redirect to Dashboard
// //       } else {
// //         alert("❌ Invalid credentials. Please try again or register first.");
// //       }
// //     } else {
// //       // Registration
// //       localStorage.setItem("user", JSON.stringify(formData));
// //       alert("✅ Registration successful! Please login now.");
// //       setIsLogin(true); // switch to login form
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         minHeight: "85vh",
// //         backgroundColor: "#f9fafc",
// //       }}
// //     >
// //       <div
// //         style={{
// //           background: "white",
// //           padding: "2.5rem",
// //           borderRadius: "12px",
// //           boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
// //           width: "380px",
// //           textAlign: "center",
// //         }}
// //       >
// //         <h2 style={{ color: "#023e8a", marginBottom: "1.5rem" }}>
// //           {isLogin ? "Login to RideConnect" : "Create an Account"}
// //         </h2>

// //         <form
// //           onSubmit={handleSubmit}
// //           style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
// //         >
// //           {!isLogin && (
// //             <input
// //               type="text"
// //               name="name"
// //               placeholder="Full Name"
// //               onChange={handleChange}
// //               required
// //               style={inputStyle}
// //             />
// //           )}

// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             onChange={handleChange}
// //             required
// //             style={inputStyle}
// //           />
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             onChange={handleChange}
// //             required
// //             style={inputStyle}
// //           />

// //           <button type="submit" style={buttonStyle}>
// //             {isLogin ? "Login" : "Register"}
// //           </button>
// //         </form>

// //         <p style={{ marginTop: "1rem", color: "#333" }}>
// //           {isLogin ? "Don’t have an account? " : "Already have an account? "}
// //           <span
// //             onClick={() => setIsLogin(!isLogin)}
// //             style={{
// //               color: "#0077b6",
// //               cursor: "pointer",
// //               fontWeight: "600",
// //             }}
// //           >
// //             {isLogin ? "Register here" : "Login here"}
// //           </span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // // 🎨 Reusable Styles
// // const inputStyle = {
// //   padding: "0.8rem",
// //   borderRadius: "6px",
// //   border: "1px solid #ccc",
// //   fontSize: "1rem",
// // };

// // const buttonStyle = {
// //   backgroundColor: "#0077b6",
// //   color: "white",
// //   padding: "0.8rem",
// //   border: "none",
// //   borderRadius: "6px",
// //   fontSize: "1rem",
// //   cursor: "pointer",
// //   transition: "0.3s",
// // };

// // export default AuthPage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthPage = () => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [isFirstLogin, setIsFirstLogin] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     password: "",
//     role: "passenger",
//     vehicleType: "",
//     vehicleNumber: "",
//     licenseNumber: "",
//     vehicleImages: [],
//   });

//   const [passwordData, setPasswordData] = useState({
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "vehicleImages") {
//       setFormData({ ...formData, vehicleImages: Array.from(files) });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handlePasswordChange = (e) => {
//     const { name, value } = e.target;
//     setPasswordData({ ...passwordData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isLogin) {
//       const storedUser = JSON.parse(localStorage.getItem("user"));

//       if (
//         storedUser &&
//         storedUser.email === formData.email &&
//         storedUser.password === formData.password
//       ) {
//         if (!storedUser.passwordChanged) {
//           alert("⚠️ First-time login detected! Please set a new password.");
//           setIsFirstLogin(true);
//         } else {
//           alert("✅ Login successful!");
//           navigate("/dashboard");
//         }
//       } else {
//         alert("❌ Invalid credentials. Please try again or register first.");
//       }
//     } else {
//       const newUser = { ...formData, passwordChanged: false };
//       localStorage.setItem("user", JSON.stringify(newUser));
//       alert("✅ Registration successful! Please login now.");
//       setIsLogin(true);
//     }
//   };

//   // Handle first-time password change
//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem("user"));

//     if (passwordData.oldPassword !== storedUser.password) {
//       alert("❌ Old password does not match!");
//       return;
//     }

//     if (passwordData.newPassword !== passwordData.confirmPassword) {
//       alert("❌ New passwords do not match!");
//       return;
//     }

//     storedUser.password = passwordData.newPassword;
//     storedUser.passwordChanged = true;
//     localStorage.setItem("user", JSON.stringify(storedUser));

//     alert("✅ Password changed successfully!");
//     navigate("/dashboard");
//   };

  
//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.card}>
//         {!isFirstLogin ? (
//           <>
//             <h2 style={styles.title}>
//               {isLogin ? "Login to SmartRide" : "Create an Account"}
//             </h2>

//             <form onSubmit={handleSubmit} style={styles.form}>
//               {!isLogin && (
//                 <>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     onChange={handleChange}
//                     required
//                     style={styles.input}
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     onChange={handleChange}
//                     required
//                     style={styles.input}
//                   />

//                   <input
//                     type="tel"
//                     name="mobile"
//                     placeholder="Mobile Number"
//                     onChange={handleChange}
//                     required
//                     style={styles.input}
//                   />

//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     onChange={handleChange}
//                     required
//                     style={styles.input}
//                   />

//                   <select
//                     name="role"
//                     onChange={handleChange}
//                     value={formData.role}
//                     style={styles.select}
//                   >
//                     <option value="passenger">Passenger</option>
//                     <option value="driver">Driver</option>
//                   </select>

//                   {formData.role === "driver" && (
//                     <div style={styles.driverSection}>
//                       <h4 style={styles.sectionTitle}>Vehicle Details</h4>

//                       <div style={styles.formGroup}>
//                         <label style={styles.label}>Vehicle Type</label>
//                         <select
//                           name="vehicleType"
//                           onChange={handleChange}
//                           value={formData.vehicleType}
//                           required
//                           style={styles.select}
//                         >
//                           <option value="">Select Vehicle Type</option>
//                           <option value="car">Car</option>
//                           <option value="bike">Bike</option>
//                           <option value="auto">Auto</option>
//                         </select>
//                       </div>

//                       <div style={styles.formGroup}>
//                         <label style={styles.label}>Vehicle Number</label>
//                         <input
//                           type="text"
//                           name="vehicleNumber"
//                           placeholder="e.g., MH12AB1234"
//                           onChange={handleChange}
//                           required
//                           style={styles.input}
//                         />
//                       </div>

//                       <div style={styles.formGroup}>
//                         <label style={styles.label}>
//                           Driver’s License Number
//                         </label>
//                         <input
//                           type="text"
//                           name="licenseNumber"
//                           placeholder="Enter license number"
//                           onChange={handleChange}
//                           required
//                           style={styles.input}
//                         />
//                       </div>

//                       <div style={styles.formGroup}>
//                         <label style={styles.label}>
//                           Upload Vehicle Images (2–3)
//                         </label>
//                         <input
//                           type="file"
//                           name="vehicleImages"
//                           multiple
//                           accept="image/*"
//                           onChange={handleChange}
//                           style={styles.fileInput}
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </>
//               )}

//               {isLogin && (
//                 <>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     onChange={handleChange}
//                     required
//                     style={styles.input}
//                   />
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     onChange={handleChange}
//                     required
//                     style={styles.input}
//                   />
//                 </>
//               )}

//               <button type="submit" style={styles.button}>
//                 {isLogin ? "Login" : "Register"}
//               </button>
//             </form>

//             <p style={styles.switchText}>
//               {isLogin
//                 ? "Don’t have an account? "
//                 : "Already have an account? "}
//               <span
//                 onClick={() => setIsLogin(!isLogin)}
//                 style={styles.switchLink}
//               >
//                 {isLogin ? "Register here" : "Login here"}
//               </span>
//             </p>
//           </>
//         ) : (
//           //for the 1st time password change
//           <>
//             <h2 style={styles.title}>Set New Password</h2>
//             <form onSubmit={handlePasswordSubmit} style={styles.form}>
//               <input
//                 type="password"
//                 name="oldPassword"
//                 placeholder="Enter old password"
//                 onChange={handlePasswordChange}
//                 required
//                 style={styles.input}
//               />
//               <input
//                 type="password"
//                 name="newPassword"
//                 placeholder="Enter new password"
//                 onChange={handlePasswordChange}
//                 required
//                 style={styles.input}
//               />
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm new password"
//                 onChange={handlePasswordChange}
//                 required
//                 style={styles.input}
//               />
//               <button type="submit" style={styles.button}>
//                 Update Password
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthPage;

// // 🎨 Styles
// const styles = {
//   pageContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "90vh",
//     backgroundColor: "#f5f7fa",
//     padding: "1rem",
//   },
//   card: {
//     background: "#ffffff",
//     padding: "2.5rem",
//     borderRadius: "12px",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//     width: "420px",
//     maxWidth: "95%",
//     textAlign: "center",
//   },
//   title: {
//     color: "#023e8a",
//     marginBottom: "1.5rem",
//     fontSize: "1.5rem",
//     fontWeight: "600",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "1rem",
//   },
//   input: {
//     padding: "0.8rem",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "1rem",
//   },
//   select: {
//     padding: "0.8rem",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "1rem",
//     backgroundColor: "white",
//   },
//   fileInput: {
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//     padding: "0.5rem",
//     backgroundColor: "white",
//     fontSize: "0.95rem",
//   },
//   button: {
//     backgroundColor: "#0077b6",
//     color: "white",
//     padding: "0.9rem",
//     border: "none",
//     borderRadius: "6px",
//     fontSize: "1rem",
//     cursor: "pointer",
//     transition: "0.3s",
//     fontWeight: "600",
//   },
//   driverSection: {
//     background: "#f8f9fa",
//     borderRadius: "10px",
//     padding: "1.5rem",
//     marginTop: "1rem",
//     border: "1px solid #e0e0e0",
//     textAlign: "left",
//     display: "flex",
//     flexDirection: "column",
//     gap: "1.2rem",
//   },
//   sectionTitle: {
//     color: "#0077b6",
//     marginBottom: "0.5rem",
//     fontWeight: "600",
//   },
//   formGroup: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "0.4rem",
//   },
//   label: {
//     fontSize: "0.95rem",
//     color: "#023e8a",
//     fontWeight: "500",
//   },
//   switchText: {
//     marginTop: "1.2rem",
//     color: "#333",
//     fontSize: "0.95rem",
//   },
//   switchLink: {
//     color: "#0077b6",
//     cursor: "pointer",
//     fontWeight: "600",
//   },
// };
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isFirstLogin, setIsFirstLogin] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    role: "passenger",
    vehicleType: "",
    vehicleNumber: "",
    licenseNumber: "",
    vehicleImages: [],
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "vehicleImages") {
      setFormData({ ...formData, vehicleImages: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle password change form
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  // 🔑 Registration / Login submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login flow
      const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
      const storedUser = allUsers.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (!storedUser) {
        alert("❌ Invalid credentials or user not found. Please register first.");
        return;
      }

      if (!storedUser.approved && storedUser.role !== "admin") {
        alert("⏳ Awaiting admin approval. You can’t log in yet.");
        return;
      }

      if (!storedUser.passwordChanged) {
        alert("⚠️ First-time login detected! Please set a new password.");
        localStorage.setItem("user", JSON.stringify(storedUser));
        setIsFirstLogin(true);
      } else {
        alert("✅ Login successful!");
        localStorage.setItem("user", JSON.stringify(storedUser));
        navigate("/dashboard");
      }
    } else {
      // Registration flow
      const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

      // Prevent duplicate email
      if (allUsers.some((u) => u.email === formData.email)) {
        alert("⚠️ This email is already registered!");
        return;
      }

      const newUser = {
        ...formData,
        passwordChanged: false,
        approved: formData.role === "admin" ? true : false, // Admin auto-approved
      };

      // Save to "all users" list
      localStorage.setItem("allUsers", JSON.stringify([...allUsers, newUser]));

      alert(
        formData.role === "admin"
          ? "✅ Admin account created successfully!"
          : "✅ Registration successful! Await admin approval before login."
      );

      setIsLogin(true);
    }
  };

  // 🔐 Handle first-time password change
  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

    if (passwordData.oldPassword !== storedUser.password) {
      alert("❌ Old password does not match!");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("❌ New passwords do not match!");
      return;
    }

    // Update passwords
    const updatedUser = {
      ...storedUser,
      password: passwordData.newPassword,
      passwordChanged: true,
    };

    const updatedAllUsers = allUsers.map((u) =>
      u.email === updatedUser.email ? updatedUser : u
    );

    localStorage.setItem("user", JSON.stringify(updatedUser));
    localStorage.setItem("allUsers", JSON.stringify(updatedAllUsers));

    alert("✅ Password changed successfully!");
    navigate("/dashboard");
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        {!isFirstLogin ? (
          <>
            <h2 style={styles.title}>
              {isLogin ? "Login to RideConnect" : "Create a RideConnect Account"}
            </h2>

            <form onSubmit={handleSubmit} style={styles.form}>
              {!isLogin && (
                <>
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
                  <input
                    type="password"
                    name="password"
                    placeholder="Temporary Password"
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />

                  <select
                    name="role"
                    onChange={handleChange}
                    value={formData.role}
                    style={styles.select}
                  >
                    <option value="passenger">Passenger</option>
                    <option value="driver">Driver</option>
                  </select>

                  {formData.role === "driver" && (
                    <div style={styles.driverSection}>
                      <h4 style={styles.sectionTitle}>Vehicle Details</h4>

                      <label style={styles.label}>Vehicle Type</label>
                      <select
                        name="vehicleType"
                        onChange={handleChange}
                        value={formData.vehicleType}
                        required
                        style={styles.select}
                      >
                        <option value="">Select Vehicle Type</option>
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                        <option value="auto">Auto</option>
                      </select>

                      <label style={styles.label}>Vehicle Number</label>
                      <input
                        type="text"
                        name="vehicleNumber"
                        placeholder="e.g., MH12AB1234"
                        onChange={handleChange}
                        required
                        style={styles.input}
                      />

                      <label style={styles.label}>Driver’s License Number</label>
                      <input
                        type="text"
                        name="licenseNumber"
                        placeholder="Enter license number"
                        onChange={handleChange}
                        required
                        style={styles.input}
                      />

                      <label style={styles.label}>Upload Vehicle Images</label>
                      <input
                        type="file"
                        name="vehicleImages"
                        multiple
                        accept="image/*"
                        onChange={handleChange}
                        style={styles.fileInput}
                      />
                    </div>
                  )}
                </>
              )}

              {isLogin && (
                <>
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
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </>
              )}

              <button type="submit" style={styles.button}>
                {isLogin ? "Login" : "Register"}
              </button>
            </form>

            <p style={styles.switchText}>
              {isLogin
                ? "Don’t have an account? "
                : "Already have an account? "}
              <span
                onClick={() => setIsLogin(!isLogin)}
                style={styles.switchLink}
              >
                {isLogin ? "Register here" : "Login here"}
              </span>
            </p>
          </>
        ) : (
          <>
            <h2 style={styles.title}>Set New Password</h2>
            <form onSubmit={handlePasswordSubmit} style={styles.form}>
              <input
                type="password"
                name="oldPassword"
                placeholder="Enter old password"
                onChange={handlePasswordChange}
                required
                style={styles.input}
              />
              <input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                onChange={handlePasswordChange}
                required
                style={styles.input}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                onChange={handlePasswordChange}
                required
                style={styles.input}
              />
              <button type="submit" style={styles.button}>
                Update Password
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;

// 🎨 Styles
const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    backgroundColor: "#f5f7fa",
    padding: "1rem",
  },
  card: {
    background: "#ffffff",
    padding: "2.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    width: "420px",
    maxWidth: "95%",
    textAlign: "center",
  },
  title: {
    color: "#023e8a",
    marginBottom: "1.5rem",
    fontSize: "1.5rem",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  select: {
    padding: "0.8rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    backgroundColor: "white",
  },
  fileInput: {
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "0.5rem",
    backgroundColor: "white",
    fontSize: "0.95rem",
  },
  button: {
    backgroundColor: "#0077b6",
    color: "white",
    padding: "0.9rem",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s",
    fontWeight: "600",
  },
  driverSection: {
    background: "#f8f9fa",
    borderRadius: "10px",
    padding: "1.5rem",
    marginTop: "1rem",
    border: "1px solid #e0e0e0",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  sectionTitle: {
    color: "#0077b6",
    marginBottom: "0.5rem",
    fontWeight: "600",
  },
  label: {
    fontSize: "0.95rem",
    color: "#023e8a",
    fontWeight: "500",
  },
  switchText: {
    marginTop: "1.2rem",
    color: "#333",
    fontSize: "0.95rem",
  },
  switchLink: {
    color: "#0077b6",
    cursor: "pointer",
    fontWeight: "600",
  },
};
