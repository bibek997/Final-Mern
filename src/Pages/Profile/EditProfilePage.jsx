// EditProfilePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { toast, ToastContainer } from 'react-toastify';

const EditProfilePage = () => {
  const [auth] = useAuth();
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/profile', {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        setBio(response.data.profile.bio || '');
        // Set existing profile image if available
      } catch (error) {
        toast.error('Failed to fetch profile data.');
      }
    };

    fetchProfile();
  }, [auth.token]);

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('bio', bio);
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }

    try {
      await axios.put('http://localhost:3000/api/profile/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${auth.token}`,
        },
      });
      toast.success('Profile updated successfully');
      navigate('/profile'); // Redirect to profile page after update
    } catch (error) {
      toast.error('Failed to update profile.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ToastContainer />
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="4"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
