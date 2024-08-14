import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import './Featured.css';

const Featured = () => {
  const [data, setData] = useState(null);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.log(error);
    });
    
  }, []);

  if (!data) return null;

  return (
    <div className='featured' data-aos="fade-up">
      <div className='container'>
        {/* Left Section */}
        <div className='left' data-aos="fade-right">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className='btn' data-aos="fade-up" data-aos-delay="100">See More Coins</button>
        </div>

        {/* Right Section with Cards */}
        <div className='right'>
          {data.map((coin, index) => (
            <div className='card' key={coin.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className='top'>
                <img src={coin.image} alt={coin.name} />
              </div>
              <div>
                <h5>{coin.name}</h5>
                <p>${coin.current_price.toLocaleString()}</p>
              </div>
              {coin.price_change_percentage_24h < 0 ? (
                <span className='red'>
                  <FiArrowDown className='icon' />
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className='green'>
                  <FiArrowUpRight className='icon' />
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
