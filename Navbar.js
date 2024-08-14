// Navbar.js

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);

  const handleLearnClick = () => {
    if (isAuthenticated) {
      navigate('/learn');
    } else {
      alert('You need to be logged in to access this page.');
      navigate('/auth');
    }
    setClick(false);
  };

  const handleContactClick = () => {
    navigate('/contact'); // Redirect to the Contact page
    setClick(false);
  };

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");
    if (isConfirmed) {
      logout(); // Log out the user
      setClick(false); // Close the menu when logging out
      navigate('/'); // Redirect to home after logout
    }
  };

  const closeMenu = () => {
    if (click) {
      setClick(false); // Close the menu when clicking on a link
    }
  };

  return (
    <div className='header' data-aos="fade-down">
      <div className='container' data-aos="fade-right">
        <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }}>
          <h1 data-aos="fade-right">Crypto<span className='primary'>Verse</span></h1>
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li data-aos="fade-up" data-aos-delay="100">
            <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }}>Home</Link>
          </li>
          {/* Conditionally render Featured link */}
          {!isAuthenticated && (
            <li data-aos="fade-up" data-aos-delay="200">
              <Link to="/#featured" onClick={() => { window.scrollTo({ top: document.getElementById('featured').offsetTop, behavior: 'smooth' }); closeMenu(); }}>Featured</Link>
            </li>
          )}
          <li data-aos="fade-up" data-aos-delay="300">
            <a href="#learn" onClick={handleLearnClick}>Learn</a>
          </li>
          {/* Conditionally render Contact link */}
          {!isAdmin && (
            <li data-aos="fade-up" data-aos-delay="400">
              <a href="#contact" onClick={handleContactClick}>Contact</a>
            </li>
          )}
          {/* Conditionally render Admin link */}
          {isAuthenticated && isAdmin && (
            <li data-aos="fade-up" data-aos-delay="500">
              <Link to="/admin" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }}>Admin</Link>
            </li>
          )}
        </ul>
        {!isAuthenticated && (
          <div className='btn-group' data-aos="fade-left">
            <Link to="/auth" className='btn' onClick={closeMenu}>Register/Login</Link>
          </div>
        )}
        {isAuthenticated && (
          <div className='btn-group' data-aos="fade-left" data-aos-delay="600">
            <button className='btn' onClick={handleLogout}>Logout</button>
          </div>
        )}
        <div className='hamburger' onClick={handleClick} data-aos="fade-left">
          {click ? <FaTimes size={20} style={{ color: '#333' }} /> : <FaBars size={20} style={{ color: '#333' }} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
