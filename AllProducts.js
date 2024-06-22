import React from 'react';
import ProductCard from './ProductCard'; // Import ProductCard component

const AllProducts = ({ products }) => {
  return (
    <div className="product-list">
      <h2>All Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} /> {/* Pass product data to ProductCard */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
