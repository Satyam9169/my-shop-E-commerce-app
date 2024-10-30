import React from "react";
// import { signOut } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/conifg";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    auth
      .signOut()
      .then(() => {
        console.log("User signed out");
        alert("Logout successfull !!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <>
      <ToastContainer />
      <button className="dropdown-item" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Logout;
