import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const productsData = [
  { id: 1, name: "Laptop", price: 750 },
  { id: 2, name: "Phone", price: 400 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Keyboard", price: 60 }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="container">
      <h1>Shopping Cart App 🛒</h1>
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
      <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.name}</h3>
              <p>Price: ${item.price} × {item.qty}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
             
          ))}
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
    </div>  
  );
}
