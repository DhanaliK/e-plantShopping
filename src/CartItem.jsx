import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { Navbar } from "./ProductList";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />

      <main className="cart-page">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>
            Total items in cart: <strong>{totalItems}</strong>
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 🌱</h2>
            <p>Add some beautiful plants to your cart.</p>
            <Link to="/plants" className="continue-button">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-container">
            <div className="cart-products">
              {cartItems.map((item) => (
                <div className="cart-product" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-product-details">
                    <h3>{item.name}</h3>
                    <p>Unit Price: ₹{item.price}</p>
                    <p>Subtotal: ₹{item.price * item.quantity}</p>

                    <div className="quantity-controls">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="delete-button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      🗑 Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="cart-summary">
              <h2>Cart Summary</h2>

              <div className="summary-row">
                <span>Total Items</span>
                <strong>{totalItems}</strong>
              </div>

              <div className="summary-row">
                <span>Total Cost</span>
                <strong>₹{totalCost}</strong>
              </div>

              <button
                className="checkout-button"
                onClick={() => alert("Checkout Coming Soon!")}
              >
                Checkout
              </button>

              <Link to="/plants" className="continue-button">
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

export default CartItem;
