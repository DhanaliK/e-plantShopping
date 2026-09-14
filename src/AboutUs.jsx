import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your one-stop destination for
          beautiful and healthy plants.
        </p>

        <p>
          We offer a wide variety of indoor, outdoor, and flowering plants
          that can bring freshness and natural beauty into your home and garden.
        </p>

        <p>
          Our goal is to make plant shopping simple, convenient, and enjoyable.
          Whether you are a beginner or an experienced plant lover, we have
          something for everyone.
        </p>

        <h2>Why Choose Us?</h2>

        <div className="about-features">
          <div>
            <h3>🌱 Healthy Plants</h3>
            <p>We provide carefully selected and healthy plants.</p>
          </div>

          <div>
            <h3>🚚 Easy Shopping</h3>
            <p>Browse our collection and add your favorite plants to your cart.</p>
          </div>

          <div>
            <h3>🌿 Wide Variety</h3>
            <p>Choose from indoor, outdoor, and flowering plants.</p>
          </div>
        </div>

        <Link to="/plants" className="continue-button">
          Explore Plants
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
