import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <div className="logo-container">
        <img
          src="./images/airbnb-logo.png"
          alt="AirBnB logo"
          className="logo"
        />
      </div>
    </nav>
  );
}
