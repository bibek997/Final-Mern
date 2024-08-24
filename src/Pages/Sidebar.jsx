import React, { useState, useEffect } from 'react';
import axiosInstance from "../Config/axiosConfig";
import { Checkbox, Radio } from 'antd';
import { Prices } from './FilterPrice';

// CheckboxList component for displaying a list of checkboxes
function Sidebar({ onFilterChange }) {
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get("/api/category/all");
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch filtered products
  const filterProduct = async () => {
    try {
      const { data } = await axiosInstance.post('/api/products/product-filters', { checked, radio });
      onFilterChange(data?.products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = (value, id) => {
    let updatedChecked = [...checked];
    if (value) {
      updatedChecked.push(id);
    } else {
      updatedChecked = updatedChecked.filter(category => category !== id);
    }
    setChecked(updatedChecked);
    filterProduct(); // Fetch products after updating filters
  };

  useEffect(() => {
    filterProduct();
  }, [checked, radio]);

  return (
    <div className="bg-gray-100 w-64 p-4 h-screen border-r border-gray-300">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Category</h1>
      <div className="flex flex-col mb-6">
        {categories.map(category => (
          <Checkbox
            className='text-gray-700 text-lg mb-2'
            key={category._id}
            onChange={(e) => handleFilter(e.target.checked, category._id)}
          >
            {category.name}
          </Checkbox>
        ))}
      </div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Price</h1>
      <div className="flex flex-col">
        <Radio.Group onChange={e => setRadio(e.target.value)}>
          {Prices.map(p => (
            <Radio
              className="text-gray-700 text-lg mb-2"
              key={p._id}
              value={p.array}
            >
              {p.name}
            </Radio>
          ))}
        </Radio.Group>
      </div>
    </div>
  );
}

export default Sidebar;
