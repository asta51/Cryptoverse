import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Learn.css';

// Import images from the assets directory
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/bcbg.jpg';
import card6 from '../assets/card7.jpeg';
import card7 from '../assets/meme.jpg';
import card8 from '../assets/defi.webp';

const Learn = () => {
  const navigate = useNavigate();

  // Use imported images in the cards array, adding paths for each card
  const cards = [
    { title: 'Crypto', description: 'Cryptocurrency is a digital currency that operates on decentralized networks using blockchain technology, ensuring secure and transparent transactions.', image: card6, path: '/crypto' },
    { title: 'BlockChain', description: 'Blockchain is a decentralized digital ledger that securely records and verifies transactions across a network of computers, ensuring transparency and immutability.', image: card5, path: '/blockchain' },
    { title: 'Defi', description: 'DeFi, or Decentralized Finance, is a blockchain-based financial system that enables peer-to-peer transactions without the need for traditional intermediaries like banks.', image: card8, path: '/defi' },
    { title: 'Bitcoin', description: 'Bitcoin is the original cryptocurrency, known for its decentralized and finite supply with a capped maximum of 21 million coins.', image: card1, path: '/bitcoin' },
    { title: 'Ethereum', description: 'Ethereum is unique for its programmable blockchain that supports smart contracts and decentralized applications (dApps) beyond simple transactions.', image: card2, path: '/ethereum' },
    { title: 'Solana', description: 'Solana is known for its high-performance blockchain with a focus on scalability, offering rapid transaction speeds and low fees through its unique Proof-of-History consensus mechanism.', image: card3, path: '/solana' },
    { title: 'Shiba Inu', description: 'The Shiba Inu is a small, fox-like dog from Japan with a bold, independent personality and a curled tail. It’s known for its loyalty, energy, and reserved nature with strangers.', image: card4, path: '/shibainu' },
    { title: 'Meme coins', description: 'Meme coins are cryptocurrencies inspired by internet memes and cultural jokes, often created as humorous or satirical takes on the traditional financial system.', image: card7, path: '/meme-coins' },
  ];

  // Function to handle card click
  const handleCardClick = (path) => {
    navigate(path); // Navigate to the new page
  };

  return (
    <div className="learn" data-aos="fade-up" data-aos-duration="1500">
      <h2>Master cryptocurrency. Learn, invest, and thrive.</h2>
      <br></br>
      <br></br>
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className="learn-card"
            onClick={() => handleCardClick(card.path)}
            data-aos="fade-up"
            data-aos-delay={index * 100} // Stagger animation based on index
            data-aos-duration="1000"
          >
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
