import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Ethereum.css';
import ethHeaderImage from '../assets/ethereum-header.avif'; // Replace with the correct path to your header image
import smartContractsImage from '../assets/smart-contracts.avif'; // Replace with the correct path to your smart contracts image
import dAppsImage from '../assets/dapps.avif'; // Replace with the correct path to your dApps image
import ether from '../assets/ethereum.avif'; // Replace with the correct path to your dApps image
import ther from '../assets/thereum.avif'; // Replace with the correct path to your dApps image

const Ethereum = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration for animations

    // TradingView widget script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        width: '80%',
        height: '500',
        symbol: 'ETHUSD',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: 'tradingview_e1d3b'
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="ethereum-container">
      <header className="ethereum-header">
        <img src={ethHeaderImage} alt="Ethereum Network" className="ethereum-header-image" />
        <div className="ethereum-header-content" data-aos="fade-up">
          <h1>What is Ethereum?</h1>
          <p>Ethereum is a decentralized platform that enables developers to build and deploy smart contracts and decentralized applications (dApps). Unlike traditional cryptocurrencies, Ethereum provides a flexible environment for creating complex applications.</p>
        </div>
      </header>
      <main className="ethereum-content">
        <section className="eth-feature" data-aos="fade-left">
          <img src={smartContractsImage} alt="Smart Contracts" className="eth-feature-image" />
          <div className="eth-feature-text">
            <h2>A fairer financial system</h2>
            <p>Today, billions of people can’t open bank accounts, others have their payments blocked. Ethereum's decentralized finance (DeFi) system never sleeps or discriminates. With just an internet connection, you can send, receive, borrow, earn interest, and even stream funds anywhere in the world.</p>
          </div>
        </section>
        <section className="eth-chart" data-aos="fade-up">
          <h2>Ethereum TradingView Chart</h2>
          <div id="tradingview_e1d3b"></div>
        </section>
        <section className="eth-feature" data-aos="fade-right">
          <img src={dAppsImage} alt="Decentralized Applications" className="eth-feature-image" />
          <div className="eth-feature-text">
            <h2>The internet of assets</h2>
            <p>Ethereum isn't just for digital money. Anything you can own can be represented, traded and put to use as non-fungible tokens (NFTs). You can tokenise your art and get royalties automatically every time it's re-sold. Or use a token for something you own to take out a loan. The possibilities are growing all the time.</p>
          </div>
        </section>
        <section className="eth-feature" data-aos="fade-right">
          <img src={ether} alt="Decentralized Applications" className="eth-feature-image" />
          <div className="eth-feature-text">
            <h2>Decentralized Applications (dApps)</h2>
            <p>Decentralized applications (dApps) are applications that run on the Ethereum blockchain. Unlike traditional apps, dApps do not rely on a central server and instead use Ethereum's decentralized network to operate, ensuring greater security and transparency.</p>
          </div>
        </section>
        <section className="eth-feature" data-aos="fade-right">
          <img src={ther} alt="Decentralized Applications" className="eth-feature-image" />
          <div className="eth-feature-text">
            <h2>An open internet</h2>
            <p>Today, we gain access to 'free' internet services by giving up control of our personal data. Ethereum services are open by default – you just need a wallet. These are free and easy to set up, controlled by you, and work without any personal info.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Ethereum;
