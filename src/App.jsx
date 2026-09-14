import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function Home() {
  return (
    <div className="home-page">
      <div className="home-overlay">
        <div className="home-content">
          <h1>Paradise Nursery</h1>
          <h2>Bring Nature Into Your Home</h2>
          <p>
            Discover beautiful indoor, outdoor, and flowering plants
            for your home and garden.
          </p>
          <Link to="/plants" className="get-started-button">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
