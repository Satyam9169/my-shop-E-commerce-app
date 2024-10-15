import React, { useEffect, useState } from "react";
import { BsFillPersonFill, BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Header.css";
import { Logout } from "../../pages";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/conifg";

const logo = (
  <div>
    <Link className="navbar-brand" to={"/"}>
      <span className="border rounded p-1 bg-dark text-white">myShop</span>
    </Link>
  </div>
);

const cart = (
  <li className="nav-item">
    <Link className="nav-link" to={"/cart"}>
      Cart
      <BsCart className="icon cart mb-1" />
    </Link>
  </li>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayName, setDisplayName] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //Monitor currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user.displayName);
        setDisplayName(user.displayName);
      } else {
        setDisplayName("");
      }
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body shadow">
      <div className="container">
        {logo}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation">
          <span className="custom-toggler-icon">
            {isMenuOpen ? "✖" : "☰"} {/* Show/hide icon */}
          </span>
        </button>
        <div
          className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                <BsFillPersonFill className="icon user mb-1" />
                Hi, {displayName}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/register"}>
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/order-history"}>
                My Orders
              </Link>
            </li>
            {cart}
            {/* Logout functionality */}
            <li className="nav-item">
              <Link className="nav-link" to={"/logout"}>
                <Logout />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
