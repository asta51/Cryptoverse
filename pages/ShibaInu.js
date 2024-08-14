import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './ShibaInu.css'; // Ensure this CSS file is updated accordingly

const Solana = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration for animations
  }, []);

  return (
    <div className="shib-container">
      <header className="shib-header">
        <div className="shib-header-content" data-aos="fade-up">
          <h1>What Is Shiba Inu (SHIB)?</h1>
          <p>Shiba Inu (SHIB) is a decentralized cryptocurrency inspired by the Shiba Inu dog meme, positioned as an alternative to Dogecoin.</p>
        </div>
      </header>
      <main className="contentx-section">
        <div className="contents-text" data-aos="fade-left">
          <h2>The Basics of Shiba</h2>
          <p>
          Shiba Inu is an Ethereum-based altcoin (a cryptocurrency other than Bitcoin) that features the Shiba Inu—a Japanese breed of hunting dog—as its mascot. Shiba Inu is widely considered to be an alternative to Dogecoin; in fact, proponents of Shiba Inu tout it as "the Dogecoin killer." 
          </p>
        </div>

        <div className="tradingview-widget" data-aos="fade-up">
          <iframe
            src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_f4cbe&symbol=BINANCE:SHIBUSDT&interval=60&hidesidetoolbar=1&hideideas=1&theme=dark"
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
        <h2>How Does Shiba Inu Work?</h2>
            <p>
                Shiba Inu operates within its own ecosystem and incorporates several key features:
            </p>
            <ul>
                <li><strong>ERC-20 Token:</strong> Shiba Inu Coin (SHIB) is an ERC-20 token built on the Ethereum blockchain, benefiting from its security and smart contract functionality.</li>
                <li><strong>Decentralized Community:</strong> The coin is driven by a large, decentralized community that actively engages in promotion and social media campaigns.</li>
                <li><strong>ShibaSwap:</strong> The Shiba Inu ecosystem includes ShibaSwap, a decentralized exchange for trading SHIB and other tokens, providing liquidity, and staking for rewards.</li>
                <li><strong>Token Ecosystem:</strong> In addition to SHIB, the ecosystem features LEASH and BONE tokens, each with specific roles within the platform, including governance and liquidity.</li>
            </ul>
            <p>
                Shiba Inu’s focus on community engagement and its growing ecosystem have contributed to its popularity as a meme coin, though its value can be highly volatile and influenced by market speculation.
            </p>

        </div>

        <div className="contents-text" data-aos="fade-left">
            <h2>Advantages of Shiba Inu</h2>
            <p>
                Shiba Inu offers several notable advantages in the blockchain and cryptocurrency space:
            </p>
            <ul>
                <li><strong>Community-Driven:</strong> Shiba Inu benefits from a vibrant and active community that drives engagement and supports the coin through various social media and promotional efforts.</li>
                <li><strong>Low Entry Cost:</strong> With its low token price, Shiba Inu offers an accessible entry point for new investors and enthusiasts, allowing them to hold large quantities of SHIB tokens.</li>
                <li><strong>Integrated Ecosystem:</strong> The Shiba Inu ecosystem includes ShibaSwap, a decentralized exchange that facilitates trading, liquidity provision, and staking, enhancing the functionality of the SHIB token.</li>
                <li><strong>Diverse Token Options:</strong> Beyond SHIB, the ecosystem features LEASH and BONE tokens, each serving distinct purposes such as governance and liquidity, contributing to the overall growth of the platform.</li>
            </ul>
            <p>
                Shiba Inu's strong community support and integrated ecosystem contribute to its appeal as a meme coin, though investors should be mindful of its inherent volatility and speculative nature.
            </p>

        </div>

        <div className="contents-text" data-aos="fade-right">
            <h2>Use Cases of Shiba Inu</h2>
            <p>
                Shiba Inu’s ecosystem supports a variety of applications and use cases:
            </p>
            <ul>
                <li><strong>Community Projects:</strong> Shiba Inu’s vibrant community often drives various projects, including charity initiatives and social campaigns, enhancing its visibility and impact.</li>
                <li><strong>Decentralized Exchange (DEX):</strong> ShibaSwap, the decentralized exchange within the Shiba Inu ecosystem, facilitates the trading of SHIB and other tokens, providing liquidity and staking options.</li>
                <li><strong>Token Staking:</strong> SHIB holders can stake their tokens on ShibaSwap to earn rewards, contributing to network stability and user engagement.</li>
                <li><strong>Meme Culture:</strong> Shiba Inu thrives on its meme-driven appeal, utilizing social media and community-driven efforts to maintain and grow its presence in the crypto space.</li>
            </ul>

        </div>

        <div className="contents-text" data-aos="fade-up">
            <h2>Future Prospects of Shiba Inu</h2>
            <p>
                Looking ahead, Shiba Inu aims to expand and evolve in several ways:
            </p>
            <ul>
                <li><strong>Community Expansion:</strong> The growth of Shiba Inu’s community will continue to play a pivotal role in its success, driving new projects and initiatives.</li>
                <li><strong>Enhanced Ecosystem:</strong> Further development of the Shiba Inu ecosystem, including additional features on ShibaSwap and new token integrations, is expected to increase its utility and attractiveness.</li>
                <li><strong>Increased Use Cases:</strong> As the cryptocurrency space evolves, Shiba Inu may explore new use cases and partnerships to enhance its value and functionality.</li>
                <li><strong>Regulatory Navigation:</strong> Adapting to regulatory changes and ensuring compliance will be essential for Shiba Inu to maintain its growth and integrate more broadly within the financial ecosystem.</li>
            </ul>

        </div>
      </main>
    </div>
  );
};

export default Solana;
