import React, { useState } from "react";
import "./Register.css";

function Register() {
  // this code use react hook to set variable for username
  const [username, setUsername] = useState("");
   // this code use react hook to set variable for email
  const [email, setEmail] = useState("");
  // this code use react hook to set variable for password
  const [password, setPassword] = useState("");
   // this code use react hook to set variable for confirmpassword
  const [confirmPassword, setConfirmPassword] = useState("");
  // this code use react hook to set variable for error
  const [error, setError] = useState("");
   // this code use react hook to set variable for successful message
  const [success, setSuccess] = useState("");

  // This code handle the user registration validation
  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setSuccess("");
      return;
    }

    if (username && email && password.length >= 6) {
      setSuccess("Registration successful!");
      setError("");
      // You can integrate backend API here for real authentication
    } else {
      setError("Please fill all fields correctly.");
      setSuccess("");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create an Account</h2>
        <form onSubmit={handleRegister} className="register-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <div className="register-footer">
          <p>Already have an account? <a href="#login">Login here</a></p>
        </div>
      </div>
    </div>
  );
}
// This make the Register Component accessible to other  components.
export default Register; 
