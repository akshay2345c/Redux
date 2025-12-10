import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import AddProduct from './pages/AddProduct/AddProduct';
import FAQ from './pages/FAQ/FAQ';
import Settings from './pages/Settings/Settings';
import { dummyProducts } from './data/dummyData';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [products] = useState(dummyProducts);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedProductId(null);
  };

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage('product-details');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
    setSelectedProductId(null);
  };

  const handleEditProduct = (productId, formData) => {
    console.log('Edit product:', productId, formData);
  };

  const handleDeleteProduct = (productId) => {
    console.log('Delete product:', productId);
  };

  const handleSaveProduct = (formData) => {
    console.log('Save product:', formData);
    handleBackToDashboard();
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <Dashboard
            products={products}
            onProductClick={handleProductClick}
          />
        );
      case 'product-details':
        const product = products.find(p => p.id === selectedProductId);
        return (
          <ProductDetails
            product={product}
            onBack={handleBackToDashboard}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        );
      case 'add-product':
        return (
          <AddProduct
            onSave={handleSaveProduct}
            onCancel={handleBackToDashboard}
          />
        );
      case 'faq':
        return <FAQ />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <Dashboard
            products={products}
            onProductClick={handleProductClick}
          />
        );
    }
  };

  return (
    <div className="app">
      <Sidebar currentPage={currentPage} onNavigate={handleNavigate} />
      <div className="app-main">
        <Navbar />
        <main className="app-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default App;
