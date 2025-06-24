import React, { useState } from 'react';


const products = [
  { id: 1, name: "Nike Air Max", category: "Footwear", price: 120 },
  { id: 2, name: "Apple Watch", category: "Electronics", price: 299 },
  { id: 3, name: "Zara T-Shirt", category: "Clothing", price: 25 },
  { id: 3, name: "Nike Sneakers ", category: "Footwear", price: 140 },
  { id: 3, name: "HeadPhones", category: "Electronics", price: 200 },
  { id: 3, name: "Zara Sweater", category: "Clothing", price: 30 }
];

function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="containerProduct">
      <h1><i class="fa-brands fa-product-hunt"></i> Product List</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
          <div className="product-card">
      <h3>{product.name}</h3>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
    </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
