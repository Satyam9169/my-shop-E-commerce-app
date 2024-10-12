import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase/conifg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Loading from "../../../components/Loader/Loading";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        toast.success("Login Successfully !!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const validate = () => {
    let errors = {};
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email address is invalid";
    if (!formData.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true); // Start loading
      setErrors(validationErrors);
      const { email, password } = formData;
      // console.log("email => " + email);
      // console.log("password => " + password);
      try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("User Logged-In Successfully !!");
        // navigate("/");
        setFormData({
          email: "",
          password: "",
        });
        setTimeout(() => {
          navigate("/"); // Delay the navigation slightly
        }, 2000); // Adjust delay time if necessary
      } catch (error) {
        toast.error("Invalid credentials");
        console.error(error.message);
      } finally {
        setLoading(false); // Stop loading after process completion
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <section className="login-container">
        <div className="login-form">
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <div className="mb-3">
              <Link to={"/resetpassword"}>Forgot Password?</Link>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}>
              {loading ? "Loading..." : "Submit"}
            </button>
            <br />
            <br />
            <p className="text-center">---or---</p>
            <div>
              <span
                className="btn btn-danger"
                size={35}
                onClick={signInWithGoogle}>
                <FaGoogle />
              </span>
            </div>
            <div className="mb-3">
              <Link to={"/register"}>Don't Have account yet</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
