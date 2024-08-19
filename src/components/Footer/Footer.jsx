import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsSnapchat,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import "./Footer.css";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className="container-fluide shadow bg-body-tertiary rounded">
      <div className="row footer">
        <div className="container">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="d-flex justify-content-center">
              <h5>&copy; {year} All Right Reversed</h5>
            </div>
            <div className="d-flex justify-content-center mt-2">
              <BsFacebook size={23} color="blue" />
              &nbsp;&nbsp;
              <BsInstagram size={23} color="pink" />
              &nbsp;&nbsp;
              <BsTwitter size={23} color="cyan" />
              &nbsp;&nbsp;
              <BsYoutube size={25} color="red" />
              &nbsp;&nbsp;
              <BsSnapchat size={25} color="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
