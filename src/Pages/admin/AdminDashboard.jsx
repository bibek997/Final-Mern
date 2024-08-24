import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import {  FaSignOutAlt } from 'react-icons/fa';
import AddCategory from './AddCategory';
import {  toast } from 'react-toastify';

import AddProduct from './AddProduct';

const AdminDashboard = () => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleCategoryClick = () => {
    setShowAddCategory(!showAddCategory);
    setShowAddProduct(false); // Hide AddProduct if it's visible
  };

  const handleProductClick = () => {
    setShowAddProduct(!showAddProduct);
    setShowAddCategory(false); // Hide AddCategory if it's visible
  };

  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
   
    setAuth({
         ... auth ,
             user: null,
              token: "" 
            });
            localStorage.removeItem("auth");
            toast.success("Logout successful"); // Clear auth state
            setTimeout(() => {
            navigate("/login");
            }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-gray-300">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-xl font-bold text-center">
          LuxeInterior Admin
        </div>
        <nav className="mt-8">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-200">
              <button onClick={handleCategoryClick} className="w-full text-left">
                Categories
              </button>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <button onClick={handleProductClick} className="w-full text-left">
                Products
              </button>

            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
            <button onClick={handleLogout}  icon={<FaSignOutAlt className="ml-2" />}>Logout</button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {showAddCategory && <AddCategory />}
        {showAddProduct && <AddProduct />}
        {/* Renders the nested route components here */}
        <Outlet />
      </main>
     
    </div>
  );
};

export default AdminDashboard;
