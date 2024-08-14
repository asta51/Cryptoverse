import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Solana.css'; // Ensure this CSS file is updated accordingly

const Solana = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration for animations
  }, []);

  return (
    <div className="solana-container">
      <header className="solana-header">
        <div className="solana-header-content" data-aos="fade-up">
          <h1>Understanding Solana</h1>
          <p>Explore Solana's innovative approach to blockchain technology, focusing on speed, scalability, and low transaction costs.</p>
        </div>
      </header>
      <main className="contents-section">
        <div className="contents-text" data-aos="fade-left">
          <h2>The Basics of Solana</h2>
          <p>
            Solana is a cutting-edge blockchain platform designed to support decentralized applications (dApps) and cryptocurrency transactions with remarkable speed and efficiency. It achieves this through a unique blend of Proof-of-History (PoH) and Proof-of-Stake (PoS) mechanisms.
          </p>
        </div>

        <div className="tradingview-widget" data-aos="fade-up">
          <iframe
            src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_f4cbe&symbol=BINANCE:SOLUSD&interval=60&hidesidetoolbar=1&hideideas=1&theme=dark"
            width="100%"
            height="500"
            frameBorder="0"
            scrolling="no"
            allowTransparency
            allowFullScreen
            title="Solana Chart"
          ></iframe>
        </div>

        <div className="contents-text" data-aos="fade-right">
          <h2>How Does Solana Work?</h2>
          <p>
            Solana's blockchain utilizes several innovative features to enhance performance:
          </p>
          <ul>
            <li><strong>Proof-of-History (PoH):</strong> A unique cryptographic method that timestamps transactions to create an immutable historical record, allowing for high-speed processing.</li>
            <li><strong>Proof-of-Stake (PoS):</strong> Works alongside PoH to secure the network. Validators are selected based on their stake, validating transactions and adding new blocks efficiently.</li>
            <li><strong>Smart Contracts:</strong> Solana supports programmable smart contracts that execute code automatically based on set conditions, offering powerful capabilities similar to Ethereum but with greater speed.</li>
            <li><strong>Native Token (SOL):</strong> Used for transaction fees, staking, and participating in network governance, the SOL token is integral to the Solana ecosystem.</li>
          </ul>
          <p>
            Solana's architecture is designed for high transaction throughput and minimal latency, making it a leading choice for developers and users seeking fast and cost-effective blockchain solutions.
          </p>
        </div>

        <div className="contents-text" data-aos="fade-left">
          <h2>Advantages of Solana</h2>
          <p>
            Solana stands out in the blockchain space for several reasons:
          </p>
          <ul>
            <li><strong>High Throughput:</strong> Solana can process thousands of transactions per second (TPS), far exceeding the capabilities of many other blockchains.</li>
            <li><strong>Low Fees:</strong> Transaction fees on Solana are significantly lower compared to Ethereum and other blockchains, making it a cost-effective option for developers and users.</li>
            <li><strong>Scalability:</strong> The combination of PoH and PoS allows Solana to scale efficiently without compromising on decentralization or security.</li>
            <li><strong>Growing Ecosystem:</strong> The Solana ecosystem is expanding rapidly, with numerous dApps, DeFi projects, and NFTs being built on the platform.</li>
          </ul>
        </div>

        <div className="contents-text" data-aos="fade-right">
          <h2>Use Cases of Solana</h2>
          <p>
            Solana's technology supports a diverse range of applications:
          </p>
          <ul>
            <li><strong>Decentralized Finance (DeFi):</strong> Solana hosts several DeFi projects that offer services such as lending, borrowing, and trading with high efficiency.</li>
            <li><strong>Non-Fungible Tokens (NFTs):</strong> The platform supports NFT marketplaces and minting services, enabling artists and creators to launch and trade digital collectibles.</li>
            <li><strong>Gaming:</strong> High-speed and low-cost transactions make Solana an attractive platform for blockchain-based games and virtual worlds.</li>
            <li><strong>Supply Chain Management:</strong> Solana’s scalability helps track and verify transactions in supply chains, enhancing transparency and efficiency.</li>
          </ul>
        </div>

        <div className="contents-text" data-aos="fade-up">
          <h2>Future Prospects of Solana</h2>
          <p>
            Looking ahead, Solana aims to continue its growth and innovation:
          </p>
          <ul>
            <li><strong>Technological Advancements:</strong> Ongoing developments in scalability and performance are expected to further solidify Solana's position in the blockchain space.</li>
            <li><strong>Increased Adoption:</strong> As more projects and users adopt Solana, its ecosystem is likely to expand, bringing new opportunities and innovations.</li>
            <li><strong>Enhanced Security:</strong> Continued improvements in network security and consensus mechanisms will help maintain trust and integrity within the Solana ecosystem.</li>
            <li><strong>Regulatory Compliance:</strong> Navigating regulatory challenges will be crucial as Solana seeks to integrate more deeply into the global financial system.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Solana;
