import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Input from '../../components/Input/Input';
import './ProductDetails.css';

const ProductDetails = ({ product, onBack, onEdit, onDelete }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: product?.title || '',
    price: product?.price || '',
    category: product?.category || '',
    description: product?.description || ''
  });

  if (!product) {
    return (
      <div className="product-details">
        <p>Product not found</p>
        <Button onClick={onBack}>Back to Dashboard</Button>
      </div>
    );
  }

  const handleSave = () => {
    onEdit && onEdit(product.id, formData);
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    onDelete && onDelete(product.id);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="product-details">
      <Button variant="ghost" onClick={onBack} className="back-button">
        ← Back
      </Button>

      <div className="product-banner">
        <div className="banner-placeholder">📦</div>
      </div>

      <div className="product-info">
        <div className="product-header">
          <div>
            <h1 className="product-title">{product.title}</h1>
            <p className="product-category">{product.category}</p>
          </div>
          <div className="product-rating">
            <span className="rating-stars">⭐</span>
            <span className="rating-value">{product.rating}</span>
          </div>
        </div>

        <div className="product-price-section">
          <span className="product-price">${product.price}</span>
        </div>

        <div className="product-description">
          <h3>Description</h3>
          <p>{product.description || 'No description available.'}</p>
        </div>

        <div className="product-meta">
          <div className="meta-item">
            <span className="meta-label">Status:</span>
            <span className={`meta-value status-${product.status}`}>
              {product.status}
            </span>
          </div>
          <div className="meta-item">
            <span className="meta-label">ID:</span>
            <span className="meta-value">{product.id}</span>
          </div>
        </div>

        <div className="product-actions">
          <Button variant="primary" onClick={() => setIsEditModalOpen(true)}>
            Edit Product
          </Button>
          <Button variant="danger" onClick={() => setIsDeleteModalOpen(true)}>
            Delete Product
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Product"
        size="md"
      >
        <div className="product-form">
          <Input
            label="Title"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <Input
            label="Price"
            id="price"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
          <Input
            label="Category"
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          />
          <div className="input-wrapper">
            <label htmlFor="description" className="input-label">Description</label>
            <textarea
              id="description"
              className="input"
              rows="4"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div className="form-actions">
            <Button variant="ghost" onClick={() => setIsEditModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete Product"
        size="sm"
      >
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this product?</p>
          <p className="delete-warning">This action cannot be undone.</p>
          <div className="form-actions">
            <Button variant="ghost" onClick={() => setIsDeleteModalOpen(false)}>
              No
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Yes, Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetails;

