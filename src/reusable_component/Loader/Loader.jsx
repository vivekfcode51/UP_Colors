import React from "react";
import "./Loader.css";
import usawinlogo from "../../assets/usawinlogo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-faded-gray">
      <div className="loader-container">
        <div className="loader"></div>
        <div className="loader-dot"></div> {/* Small circular dot */}
        <img src={usawinlogo} alt="Loading" />
      </div>
    </div>
  );
};

export default Loader;
