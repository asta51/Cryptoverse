import React, { useState, useEffect, useRef } from 'react';
import './Chatbox.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';

const Chatbox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false); // For loading state

    const messagesEndRef = useRef(null); // Ref to track the end of the messages container

    const toggleChatbox = () => setIsOpen(!isOpen);

    const fetchGeminiAIResponse = async (query) => {
        try {
            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDqZB4D6igoDxR9DGLx0pZI7HRwOGFfYtw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: query
                                }
                            ]
                        }
                    ]
                }),
            });

            const data = await response.json();

            // Extracting and cleaning the text content
            let text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I couldn’t find the answer to your question.';
            text = text.replace(/[#*]+/g, ''); // Remove unwanted '*' and '#'
            text = text.split('. ').slice(0, 3).join('. ') + '.'; // Limit to 2-3 sentences

            return text;
        } catch (error) {
            console.error('Error fetching response from Gemini AI:', error);
            return 'Sorry, something went wrong with Gemini AI. Please try again later.';
        }
    };

    const fetchCryptoData = async (query) => {
        if (query.toLowerCase().includes('current price of bitcoin') || query.toLowerCase().includes('bitcoin price')) {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
            const data = await response.json();
            return `The current price of Bitcoin is $${data.bitcoin.usd}`;
        } else if (query.toLowerCase().includes('current price of ethereum') || query.toLowerCase().includes('ethereum price')) {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
            const data = await response.json();
            return `The current price of Ethereum is $${data.ethereum.usd}`;
        } else {
            // For general or non-crypto-specific questions, delegate to Gemini AI
            return await fetchGeminiAIResponse(query);
        }
    };

    const handleSendMessage = async () => {
        if (input.trim() !== '') {
            setMessages([...messages, { text: input, sender: 'user' }]);
            setInput('');
            setLoading(true);

            const response = await fetchCryptoData(input.trim());

            setMessages(prevMessages => [...prevMessages, { text: response, sender: 'bot' }]);
            setLoading(false);
        }
    };

    // Scroll to the bottom of the messages when new messages are added
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className={`chatbox-container ${isOpen ? 'open' : ''}`}>
            <div className="chatbox-icon" onClick={toggleChatbox}>
                💬
            </div>
            {isOpen && (
                <div className="chatbox">
                    <div className="chatbox-header">
                        <span>Crypto Help-Box</span>
                        <button className="close-button" onClick={toggleChatbox}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <div className="messages">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.sender}`}>
                                {message.text}
                            </div>
                        ))}
                        {loading && <div className="message bot">Thinking...</div>}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            disabled={loading}
                        />
                        <button onClick={handleSendMessage} disabled={loading}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbox;
