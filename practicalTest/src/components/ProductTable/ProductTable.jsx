import React from 'react';
import './ProductTable.css';

const ProductTable = ({ products, onRowClick }) => {
  return (
    <div className="product-table-wrapper">
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} onClick={() => onRowClick && onRowClick(product.id)}>
              <td>{product.id}</td>
              <td className="product-title">{product.title}</td>
              <td className="product-category">{product.category}</td>
              <td className="product-price">${product.price}</td>
              <td className="product-rating">⭐ {product.rating}</td>
              <td>
                <span className={`product-status product-status-${product.status}`}>
                  {product.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

