import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div>
      <div className="hero-container">
        <img
          src="./images/collage.png"
          alt="Collage of activites"
          className="hero"
        />
      </div>
      <h1>Online Experiences</h1>
      <h2 className="hero-description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </h2>
    </div>
  );
}
