import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
//components
import { Header, Footer } from "./components";
// pages
import { Home, Contact, Login, Register, ResetPassword, Logout } from "./pages";
// import { auth } from './firebase/conifg'

const App = () => {
  return (
    <>
      <div>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
