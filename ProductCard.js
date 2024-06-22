import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const ProductCard = ({ product }) => {
  const { name, company, category, price, rating, discount, availability } = product;

  const discountPrice = price * (1 - discount / 100);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}> {/* Link to SingleProduct page */}
        <img src={product.imageUrl} alt={name} /> {/* Assuming image URL in product data */}
        <h3>{name}</h3>
      </Link>
      <p>
        <span className="company">{company}</span> - {category}
      </p>
      <div className="product-details">
        <span className="price">${discountPrice.toFixed(2)}</span>
        {discount > 0 && <span className="discount">-{discount}%</span>}
        <span className="rating">
          {rating} {/* Display rating (numerical or stars) */}
        </span>
        <span className="availability">{availability ? 'In Stock' : 'Out of Stock'}</span>
      </div>
    </div>
  );
};

export default ProductCard;
