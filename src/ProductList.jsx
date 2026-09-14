import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", price: 299, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1593482892290-f54927ae2e1b?auto=format&fit=crop&w=500&q=80" },
  { id: 2, name: "Peace Lily", price: 349, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80" },
  { id: 3, name: "Monstera", price: 499, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=500&q=80" },
  { id: 4, name: "ZZ Plant", price: 399, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1614594575920-a2e7f2f7f4a0?auto=format&fit=crop&w=500&q=80" },
  { id: 5, name: "Rubber Plant", price: 449, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=500&q=80" },
  { id: 6, name: "Spider Plant", price: 249, category: "Indoor Plants", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80" },

  { id: 7, name: "Aloe Vera", price: 199, category: "Outdoor Plants", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8f6b8c5?auto=format&fit=crop&w=500&q=80" },
  { id: 8, name: "Jade Plant", price: 279, category: "Outdoor Plants", image: "https://images.unsplash.com/photo-1566934590819-1c8d5d6c0f5e?auto=format&fit=crop&w=500&q=80" },
  { id: 9, name: "Areca Palm", price: 599, category: "Outdoor Plants", image: "https://images.unsplash.com/photo-1524593166156-312f362cada0?auto=format&fit=crop&w=500&q=80" },
  { id: 10, name: "Boston Fern", price: 329, category: "Outdoor Plants", image: "https://images.unsplash.com/photo-1620803366004-119b57f06e6f?auto=format&fit=crop&w=500&q=80" },
  { id: 11, name: "Croton", price: 379, category: "Outdoor Plants", image: "https://images.unsplash.com/photo-1601985705806-5b1f0e98f9a8?auto=format&fit=crop&w=500&q=80" },
  { id: 12, name: "Calathea", price: 429, category: "Outdoor Plants", image: "https://images.unsplash.com/photo-1616690246344-9e7c4a8f8f4d?auto=format&fit=crop&w=500&q=80" },

  { id: 13, name: "Rose Plant", price: 299, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=500&q=80" },
  { id: 14, name: "Orchid", price: 549, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1567548312404-5e5e1f5e3c5c?auto=format&fit=crop&w=500&q=80" },
  { id: 15, name: "Hibiscus", price: 279, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=500&q=80" },
  { id: 16, name: "Lavender", price: 329, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80" },
  { id: 17, name: "Marigold", price: 229, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=500&q=80" },
  { id: 18, name: "Daisy", price: 249, category: "Flowering Plants", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=80" }
];

export function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🌿 Paradise Nursery</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isAdded = cartItems.some((item) => item.id === plant.id);

  return (
    <div className="product-card">
      <img className="plant-image" src={plant.image} alt={plant.name} />

      <div className="product-info">
        <h3>{plant.name}</h3>
        <p className="price">₹{plant.price}</p>

        <button
          className="add-button"
          onClick={() => dispatch(addToCart(plant))}
          disabled={isAdded}
        >
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

function ProductList() {
  const categories = [
    "Indoor Plants",
    "Outdoor Plants",
    "Flowering Plants",
  ];

  return (
    <div>
      <Navbar />

      <main className="products-page">
        <div className="products-header">
          <h1>Our Plants</h1>
          <p>Bring nature into your home with our beautiful collection.</p>
        </div>

        {categories.map((category) => {
          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section className="plant-category" key={category}>
              <h2>{category}</h2>

              <div className="product-grid">
                {categoryPlants.map((plant) => (
                  <ProductCard key={plant.id} plant={plant} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default ProductList;
