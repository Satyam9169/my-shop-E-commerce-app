import React, { useEffect, useState } from "react";
import { BsFillPersonFill, BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Header.css";
import { Logout } from "../../pages";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase/conifg";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_USER } from "../../redux/slice/authSlice";
import { doc, getDoc } from "firebase/firestore";

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
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();

  //Monitor currently sign in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        getDoc(userRef).then((docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setDisplayName(`${userData.firstName} ${userData.lastName}`);
            dispatch(
              SET_ACTIVE_USER({
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: user.email,
                userName: user.displayName,
                userID: user.uid,
              })
            );
          } else {
            setDisplayName("");
          }
          // console.log(user.firstName + " : " + user.lastName)
        });
      }
      // if (user) {
      //   const fullName = user.displayName || ""; // fallback in case displayName is null
      //   const [firstName, lastName] = fullName.split(" "); // this will split based on the first space
      //   setDisplayName(fullName);
      //   console.log(user);
      //   const uid = user.uid;
      //   setDisplayName(fullName);
      //   dispatch(
      //     SET_ACTIVE_USER({
      //       firstName: user.firstName || "",
      //       lastName: user.lastName || "",
      //       email: user.email,
      //       userName: user.displayName,
      //       userID: user.uid,
      //     })
      //   );
      // } else {
      //   setDisplayName("");
      // }
    });
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body shadow">
      <div className="container">
        {logo}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            {isMenuOpen ? "✖" : "☰"} {/* Show/hide icon */}
          </span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
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
            {/* Display the user's displayName or email */}
            {displayName && (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  <BsFillPersonFill className="icon user mb-1" />
                  Hi, {displayName}
                </Link>
              </li>
            )}

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
