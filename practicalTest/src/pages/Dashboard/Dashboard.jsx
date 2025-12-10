import React, { useState } from 'react';
import ProductTable from '../../components/ProductTable/ProductTable';
import ProductCard from '../../components/ProductCard/ProductCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBox from '../../components/FilterBox/FilterBox';
import Pagination from '../../components/Pagination/Pagination';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import './Dashboard.css';

const Dashboard = ({ products, onProductClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('id');
  const [currentPage, setCurrentPage] = useState(1);
  const [infiniteScroll, setInfiniteScroll] = useState(false);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'

  const categories = ['all', ...new Set(products.map(p => p.category))];
  const categoryOptions = categories.map(cat => ({
    value: cat,
    label: cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)
  }));

  const sortOptions = [
    { value: 'id', label: 'ID' },
    { value: 'title', label: 'Title' },
    { value: 'price', label: 'Price' },
    { value: 'rating', label: 'Rating' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Products</h1>
        <div className="dashboard-actions">
          <button
            className={`view-toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => setViewMode('table')}
          >
            Table
          </button>
          <button
            className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
        </div>
      </div>

      <div className="dashboard-controls">
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterBox
          label="Category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          options={categoryOptions}
        />
        <FilterBox
          label="Sort By"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          options={sortOptions}
        />
        <ToggleSwitch
          label="Infinite Scroll Mode"
          checked={infiniteScroll}
          onChange={(e) => setInfiniteScroll(e.target.checked)}
        />
      </div>

      {viewMode === 'table' ? (
        <ProductTable
          products={products}
          onRowClick={onProductClick}
        />
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick && onProductClick(product.id)}
            />
          ))}
        </div>
      )}

      {!infiniteScroll && (
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Dashboard;

