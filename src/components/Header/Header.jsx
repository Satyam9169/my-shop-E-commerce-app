import { useEffect, useState } from "react";
import { BsFillPersonFill, BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Header.css";
import { Logout } from "../../pages";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/conifg";
import { useDispatch } from "react-redux";
import {
  SET_ACTIVE_USER,
  REMOVE_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import { ShowOnLogin, ShowOnLogout } from "../HiddenLogin/HiddenLogin";
// import { doc, getDoc, setDoc } from "firebase/firestore";

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

  // useEffect(() => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const userRef = doc(db, "users", user.uid);
  //       const docSnap = await getDoc(userRef);

  //       if (docSnap.exists()) {
  // If user data exists in Firestore, use it
  //         const userData = docSnap.data();
  //         setDisplayName(`${userData.firstName} ${userData.lastName}`);
  //         dispatch(
  //           SET_ACTIVE_USER({
  //             firstName: userData.firstName,
  //             lastName: userData.lastName,
  //             email: user.email,
  //             userName: user.displayName,
  //             userID: user.uid,
  //           })
  //         );
  //       } else {
  // If user data doesn't exist in Firestore, use Google displayName
  //         const [firstName, lastName] = user.displayName
  //          ? user.displayName.split(" ")
  //           : ["", ""]; // Fallback if displayName is null

  // Optionally save the Google login name as a new Firestore document
  //         await setDoc(userRef, { firstName, lastName, email: user.email });

  //         setDisplayName(`${firstName} ${lastName}`);
  //         dispatch(
  //           SET_ACTIVE_USER({
  //             firstName: firstName || "",
  //             lastName: lastName || "",
  //             email: user.email,
  //             userName: user.displayName,
  //             userID: user.uid,
  //           })
  //         );
  //       }
  //     } else {
  //       setDisplayName("");
  //     }
  //   });
  // }, [dispatch]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName === null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }
        dispatch(
          SET_ACTIVE_USER({
            firstName: user.firstName || "",
            // lastName: user.lastName || "",
            // email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER({}));
      }
    });
  }, [displayName, dispatch]);

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
            <ShowOnLogin>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  <BsFillPersonFill className="icon user mb-1" />
                  Hi, {displayName}
                </Link>
              </li>
            </ShowOnLogin>

            <ShowOnLogout>
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
            </ShowOnLogout>

            {cart}
            <ShowOnLogin>
              <li className="nav-item">
                <Link className="nav-link" to={"/order-history"}>
                  My Orders
                </Link>
              </li>

              {/* Logout functionality */}
              <li className="nav-item">
                <Link className="nav-link" to={"/logout"}>
                  <Logout />
                </Link>
              </li>
            </ShowOnLogin>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
