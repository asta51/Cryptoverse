import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Hero.css';
import Crypto from '../assets/hero-img.png';

const Hero = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(email)) {
      navigate('/auth', { state: { email } });
    } else {
      alert('Invalid email');
    }
  };

  return (
    <div className='hero' data-aos="fade-up">
      <div className='container'>
        <div className='left'>
          <p data-aos="fade-up" data-aos-delay="100">Navigate the Crypto World</p>
          <h1 data-aos="fade-up" data-aos-delay="200">Master Cryptocurrency with Us.</h1>
          <p data-aos="fade-up" data-aos-delay="300">From Novice to Expert</p>
          <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="400">
            <div className='input-container'>
              <input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type='submit' className='btn'>Learn More</button>
            </div>
          </form>
        </div>
        <div className='right' data-aos="fade-left">
          <div className='img-container'>
            <img src={Crypto} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
