// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from './Navbar'; // Ensure you have a Navbar component

const Home = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Assuming you have a logout function in your AuthContext

  const handleLogout = () => {
    logout(); // Call logout function to clear auth state
    navigate('/auth'); // Redirect to authentication page or login page
  };

  return (
    <div className="home">
      <Navbar /> {/* Render your Navbar */}
      <div className="home-content">
        {/* Content for the home page */}
        <h1>Welcome to Home Page</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
