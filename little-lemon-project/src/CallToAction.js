import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Hero.css";
import foodImage from "./images/littlelemonfood.jpg";

function Hero() {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate("/booking"); // goes to the BookingPage
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="reserve-btn" onClick={handleReserveClick}>
          Reserve a Table
        </button>
      </div>

      <div className="hero-image">
        <img src={foodImage} alt="Person holding food" />
      </div>
    </section>
  );
}

export default Hero;
