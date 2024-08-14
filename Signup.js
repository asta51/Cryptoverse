import React from 'react';
import './Signup.css';
import Crypto from '../assets/trade.png';

const Signup = () => {
  return (
    <div className='signup' data-aos="fade-up">
      <div className='container'>
        <div className='left' data-aos="fade-right">
          <img src={Crypto} alt='Crypto Illustration' />
        </div>
        <div className='right' data-aos="fade-left">
          <h2>Build Your Crypto Knowledge.</h2>
          <p>Dive into the world of cryptocurrency with our expertly crafted learning modules designed to transform complex concepts into actionable knowledge.</p>
          <div className='input-container' data-aos="fade-up" data-aos-delay="200">
            <input type='email' placeholder='Enter your email' />
            <button className='btn'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
