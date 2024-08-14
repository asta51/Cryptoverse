import React, { useEffect } from 'react';
import './Defi.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const DeFi = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration for animation
    }, []);

    return (
        <div className='bg'>
            <div className="defi-container">
                <header className="defi-header" data-aos="fade-in">
                    <div className="defi-header-content">
                        <div className='img'>
                            <h1>The Future of Finance: Decentralized Finance (DeFi)</h1>
                            <p>Unlocking the power of blockchain to create a transparent, inclusive, and borderless financial ecosystem.</p>
                        </div>
                    </div>
                </header>

                <div className="defi-content">
                    <section className="defi-section" data-aos="fade-up">
                        <h2>What is DeFi?</h2>
                        <p>Decentralized Finance (DeFi) represents a revolutionary shift in the way we interact with financial systems. Built on the foundation of blockchain technology, DeFi empowers individuals to access financial services like lending, borrowing, and trading without the need for centralized institutions. It's finance for the digital age—transparent, trustless, and globally accessible.</p>
                    </section>

                    <section className="defi-section" data-aos="fade-up">
                        <h2>Core Principles of DeFi</h2>
                        <div className="defi-cards">
                            <div className="defi-card" data-aos="flip-left">
                                <h3>Transparency</h3>
                                <p>All transactions on DeFi platforms are recorded on a public ledger, ensuring complete transparency and security.</p>
                            </div>
                            <div className="defi-card" data-aos="flip-left" data-aos-delay="100">
                                <h3>Decentralization</h3>
                                <p>DeFi operates without a central authority, relying on smart contracts to automate processes and reduce the risk of human error.</p>
                            </div>
                            <div className="defi-card" data-aos="flip-left" data-aos-delay="200">
                                <h3>Inclusivity</h3>
                                <p>Anyone with an internet connection can participate in DeFi, breaking down barriers to financial services worldwide.</p>
                            </div>
                        </div>
                    </section>

                    <section className="defi-section" data-aos="fade-up">
                        <h2>DeFi Use Cases</h2>
                        <p>DeFi is transforming traditional finance by offering innovative solutions that are accessible to everyone. Here are some of the most popular use cases:</p>
                        <ul className="defi-list">
                            <li><strong>Decentralized Exchanges (DEXs):</strong> Platforms like Uniswap allow users to trade assets directly without intermediaries, providing greater control and lower fees.</li>
                            <li><strong>Lending & Borrowing:</strong> Services like Aave and Compound enable users to lend their assets to earn interest or borrow funds without a credit check.</li>
                            <li><strong>Stablecoins:</strong> Cryptocurrencies like USDC and DAI are pegged to stable assets, offering a refuge from volatility while maintaining the benefits of digital currencies.</li>
                            <li><strong>Yield Farming:</strong> Maximize returns by participating in liquidity pools and earning rewards in the form of tokens.</li>
                            <li><strong>Insurance:</strong> DeFi insurance protocols offer coverage for smart contract risks, protecting users from potential losses.</li>
                        </ul>
                    </section>

                    <section className="defi-section" data-aos="fade-up">
                        <h2>Why DeFi Matters</h2>
                        <p>DeFi is more than just a trend—it's a paradigm shift in how we think about money, ownership, and access to financial opportunities. By removing intermediaries and leveraging the power of blockchain, DeFi has the potential to create a more equitable financial system that serves everyone, regardless of location or background.</p>
                    </section>

                    <section className="defi-section" data-aos="fade-up">
                        <h2>The Road Ahead</h2>
                        <p>As DeFi continues to evolve, it promises to redefine finance in ways we can only begin to imagine. From tokenized assets and decentralized identity to cross-chain interoperability and beyond, the future of DeFi is bright, bold, and full of possibilities.</p>
                    </section>
                </div>

                <footer className="defi-footer">
                    <p>&copy; 2024 | DeFi Academy | Empowering the Future of Finance</p>
                </footer>
            </div>
        </div>
    );
};

export default DeFi;
