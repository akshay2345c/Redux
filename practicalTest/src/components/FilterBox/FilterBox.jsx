import React from 'react';
import './FilterBox.css';

const FilterBox = ({ value, onChange, options, label }) => {
  return (
    <div className="filter-box">
      {label && <label className="filter-label">{label}</label>}
      <select
        className="filter-select"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBox;

