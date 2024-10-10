import React from "react";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/conifg";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        toast.success("Logout successfully !!");
        // navigate("/");
        setTimeout(() => {
          navigate("/login"); // Delay the navigation slightly
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <button className="dropdown-item" onClick={handleLogout}>
        Logout
      </button>
      <ToastContainer />
    </>
  );
};

export default Logout;
