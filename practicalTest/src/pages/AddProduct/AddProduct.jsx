import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './AddProduct.css';

const AddProduct = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    description: ''
  });

  const handleSubmit = () => {
    onSave && onSave(formData);
    setFormData({ title: '', price: '', category: '', description: '' });
  };

  return (
    <div className="add-product-page">
      <div className="add-product-header">
        <h1 className="add-product-title">Add New Product</h1>
        <p className="add-product-subtitle">Fill in the details below to add a new product to your inventory</p>
      </div>

      <div className="add-product-form-container">
        <div className="add-product-form">
          <Input
            label="Product Title"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter product title"
          />
          <Input
            label="Price"
            id="price"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            placeholder="0.00"
          />
          <Input
            label="Category"
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            placeholder="Enter category"
          />
          <div className="input-wrapper">
            <label htmlFor="description" className="input-label">Description</label>
            <textarea
              id="description"
              className="input"
              rows="6"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter product description"
            />
          </div>
          <div className="form-actions">
            <Button variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

