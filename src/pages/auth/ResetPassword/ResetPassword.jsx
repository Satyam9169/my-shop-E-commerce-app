import React, { useState } from "react";
import "./ResetPassword.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase/conifg";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email address is invalid");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setMessage("Password reset email sent successfully");
          setEmail("");
          setTimeout(() => {
            toast.success("Link sent successfully !!");
          }, 1000);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <section className="reset-container">
      <form className="reset-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleChange}
          />
          {error && <div className="error">{error}</div>}
          {message && <div className="message">{message}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ResetPassword;
