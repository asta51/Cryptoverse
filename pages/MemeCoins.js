import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './MemeCoins.css'; // Ensure this file exists and is imported correctly

const MemeCoins = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with a duration for animations

    // Load TradingView script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize TradingView widgets when the script is loaded
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          "width": "100%",
          "height": "400",
          "symbol": "BINANCE:DOGEUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "save_image": false,
          "container_id": "tradingview_doge_chart"
        });
        
        new window.TradingView.widget({
          "width": "100%",
          "height": "400",
          "symbol": "BINANCE:PEPEUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "save_image": false,
          "container_id": "tradingview_pepe_chart"
        });

        new window.TradingView.widget({
          "width": "100%",
          "height": "400",
          "symbol": "BINANCE:FLOKIUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "save_image": false,
          "container_id": "tradingview_floki_chart"
        });
      }
    };

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="memecoins-container">
      <header className="memecoins-header" data-aos="fade-in">
        <h1>Meme Coins: A Fun Exploration of Cryptocurrency</h1>
        <p>Discover the world of meme coins, including Dogecoin, Pepecoin, and Floki Inu. Learn more about their unique characteristics and market trends.</p>
      </header>
      <main className="memecoins-content">
        <section className="memecoin-section" data-aos="fade-up">
          <div className="memecoin-content">
            <h2>Dogecoin (DOGE)</h2>
            <p><strong>Origin:</strong> Launched in December 2013 by software engineers Billy Markus and Jackson Palmer, Dogecoin was originally created as a joke based on the popular "Doge" meme featuring a Shiba Inu dog.</p>
            <p><strong>Community and Use:</strong> Despite its origins, Dogecoin has developed a strong and active community. It’s used primarily for tipping content creators online and for charitable causes. The coin has been involved in several high-profile fundraising campaigns.</p>
            <p><strong>Features:</strong> Dogecoin operates on its own blockchain and has a fast block time (1 minute) compared to Bitcoin, leading to quicker transaction confirmations. It has a large supply with no maximum cap, which contrasts with Bitcoin's capped supply.</p>
            <p><strong>Popularity:</strong> The coin gained significant attention in 2021, partly due to endorsements from high-profile individuals such as Elon Musk. It has been featured in mainstream media and continues to have a strong presence in the cryptocurrency space.</p>
          </div>
          <div className="tradingview-widget" data-aos="fade-in">
            <div id="tradingview_doge_chart"></div>
          </div>
        </section>
        <section className="memecoin-section" data-aos="fade-up">
          <div className="memecoin-content">
            <h2>Pepecoin (PEPE)</h2>
            <p><strong>Origin:</strong> Pepecoin is based on the "Pepe the Frog" meme, which originated from a comic series by Matt Furie. The coin emerged as a way for fans of the meme to participate in the cryptocurrency space.</p>
            <p><strong>Community and Use:</strong> Pepecoin represents a niche but passionate community. It’s used more as a symbol of meme culture and digital enthusiasm rather than for specific transactions or practical applications.</p>
            <p><strong>Features:</strong> Pepecoin operates on a similar blockchain technology as other cryptocurrencies but focuses on leveraging meme culture for its identity. It may not have significant technical innovations but serves as a cultural artifact in the crypto world.</p>
            <p><strong>Popularity:</strong> The coin’s popularity is largely driven by its association with internet meme culture and the broader cryptocurrency community’s interest in playful and culturally significant projects.</p>
          </div>
          <div className="tradingview-widget" data-aos="fade-in">
            <div id="tradingview_pepe_chart"></div>
          </div>
        </section>
        <section className="memecoin-section" data-aos="fade-up">
          <div className="memecoin-content">
            <h2>Floki Inu (FLOKI)</h2>
            <p><strong>Origin:</strong> Floki Inu is named after Elon Musk’s Shiba Inu dog, Floki. The coin emerged as part of a trend where cryptocurrencies are inspired by popular figures and memes.</p>
            <p><strong>Community and Use:</strong> Floki Inu has built a dedicated community that sees it as a fun and engaging project within the crypto space. It aims to incorporate meme culture into its branding and has been involved in various promotional campaigns.</p>
            <p><strong>Features:</strong> Floki Inu operates on the Ethereum blockchain and leverages meme culture as its core identity. It has various features aimed at increasing engagement and community participation.</p>
            <p><strong>Popularity:</strong> The coin's popularity is closely tied to its meme-based branding and endorsements from popular figures in the cryptocurrency and internet communities.</p>
          </div>
          <div className="tradingview-widget" data-aos="fade-in">
            <div id="tradingview_floki_chart"></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MemeCoins;
