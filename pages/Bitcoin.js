import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, Element } from 'react-scroll';
import './Bitcoin.css';
import topImage from '../assets/top.png'; // Ensure this path is correct
import sideImage from '../assets/side1.svg'; // Ensure this path is correct
import ther from '../assets/bbc.jpg'; // Ensure this path is correct
import { Fade, Zoom } from 'react-reveal';

const Bitcoin = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bitcoins-container">
      <header className="bitcoin-header">
        <img src={topImage} alt="Bitcoin" className="bitcoin-header-image" />
        <div className="bitcoin-header-content">
          <h1 data-aos="fade-down">How Bitcoin Works</h1>
          <p data-aos="fade-up">An overview of Bitcoin’s fundamental mechanics and how you can get started.</p>
          <Link to="content-section" smooth={true} duration={1000} className="scroll-down-button">
            Learn More
          </Link>
        </div>
      </header>
      <Element name="content-section" className="content-section">
        <Zoom>
          <div className="content-image">
            <img src={sideImage} alt="Bitcoin Overview" className="image" />
          </div>
        </Zoom>
        <Fade bottom>
          <div className="tradingview-widget-container">
            <iframe
              src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_f4cbe&symbol=BINANCE:BTCUSD&interval=60&hidesidetoolbar=1&hideideas=1&theme=dark"
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              allowTransparency
              allowFullScreen
              title="Bitcoin Chart"
            ></iframe>
          </div>
        </Fade>
        <Fade bottom>
          <section className="content-text" data-aos="fade-up">
            <img src={ther} alt="Decentralized Applications" className="eth-feature-image" />
            <h2>The Basics for a New User</h2>
            <p>
              For newcomers to Bitcoin, getting started is simple. Install a Bitcoin wallet on your device, which will generate your first Bitcoin address. You can use these addresses to receive or send Bitcoin. Much like email addresses, Bitcoin addresses are unique and should be used once for each transaction to ensure privacy and security.
            </p>
            <p>
              Understanding Bitcoin's underlying technology can be beneficial, but it's not required to start using it. The primary step is to secure your wallet and understand the basics of Bitcoin transactions.
            </p>
          </section>
        </Fade>
        <Fade bottom>
          <section className="content-text" data-aos="fade-up">
            <h2>History of Bitcoin</h2>
            <p>
              Bitcoin was invented in 2008 by an anonymous person or group of people using the name Satoshi Nakamoto. It was introduced as open-source software in January 2009. The aim was to create a decentralized digital currency that operates without a central authority or banks.
            </p>
            <p>
              The first transaction using Bitcoin occurred between Nakamoto and a computer scientist named Hal Finney in January 2009. Since then, Bitcoin has evolved significantly, with increased adoption and improvements in its underlying technology.
            </p>
          </section>
        </Fade>
        <Fade bottom>
          <section className="content-text" data-aos="fade-up">
            <h2>Key Features of Bitcoin</h2>
            <ul>
              <li><strong>Decentralization:</strong> Bitcoin operates on a decentralized network of computers, known as nodes, which makes it resistant to censorship and control by any single entity.</li>
              <li><strong>Limited Supply:</strong> Bitcoin has a maximum supply of 21 million coins. This scarcity is built into its protocol to create value and prevent inflation.</li>
              <li><strong>Transparency:</strong> All Bitcoin transactions are recorded on a public ledger called the blockchain, allowing anyone to verify transactions and track the flow of Bitcoin.</li>
              <li><strong>Security:</strong> Bitcoin transactions are secured through cryptographic techniques and the consensus mechanism of the blockchain, which prevents fraud and counterfeiting.</li>
            </ul>
          </section>
        </Fade>
        <Fade bottom>
          <section className="content-text" data-aos="fade-up">
            <h2>Common Misconceptions</h2>
            <ul>
              <li><strong>Bitcoin is Anonymous:</strong> While Bitcoin transactions do not require personal information, they are recorded on a public ledger. Transactions can be traced, though not directly linked to individuals.</li>
              <li><strong>Bitcoin is a Get-Rich-Quick Scheme:</strong> Bitcoin is a technology and an asset. While its price can be volatile, it should not be seen as a quick path to wealth.</li>
              <li><strong>Bitcoin is Illegal:</strong> Bitcoin is legal in many countries and can be used for various legitimate purposes. Regulations vary by region, and it's important to understand local laws.</li>
            </ul>
          </section>
        </Fade>
      </Element>
    </div>
  );
};

export default Bitcoin;
