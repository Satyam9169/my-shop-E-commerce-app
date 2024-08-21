import React from "react";
import "./Loading.css";
import ReactDOM from "react-dom";

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="loading-container">
      <div className="spinner"></div>
      <span>Loading...</span>
    </div>,
    document.getElementById("loader")
  );
};

export default Loading;
