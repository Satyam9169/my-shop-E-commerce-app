import React from "react";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
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
    // try {
    //   await signOut(auth);
    //   // e.stopPropagation();
    //   //navigate("/login"); // Delay the navigation slightly
    //   console.log("logout successfull !!");
    //   // toast.success("Logout successfully !!");
    //   setTimeout(() => {
    //     navigate("/login");
    //   }, 2000);
    // } catch (error) {
    //   toast.error(error.message);
    // }
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
