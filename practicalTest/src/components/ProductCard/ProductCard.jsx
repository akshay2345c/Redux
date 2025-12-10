import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card-image">
        <span className="product-placeholder">📦</span>
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-card-category">{product.category}</p>
        <div className="product-card-footer">
          <span className="product-card-price">${product.price}</span>
          <span className="product-card-rating">⭐ {product.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

