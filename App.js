import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Auth from './components/Auth';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Learn from './components/Learn';
import Bitcoin from './pages/Bitcoin';
import Ethereum from './pages/Ethereum';
import Solana from './pages/Solana';
import ShibaInu from './pages/ShibaInu';
import MemeCoins from './pages/MemeCoins';
import BlockChain from './pages/BlockChain';
import Crypto from './pages/Crypto';
import Defi from './pages/Defi';
import Contact from './components/Contact'; // Import the Contact page
import Admin from './components/Admin'; // Import the Admin component
import AdminRoute from './components/AdminRoute'; // Import the AdminRoute component
import Chatbox from './components/Chatbox'; // Import the Chatbox component

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/home" element={<HomeContent />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/learn" element={<PrivateRoute><Learn /></PrivateRoute>} />
        <Route path="/bitcoin" element={<Bitcoin />} />
        <Route path="/ethereum" element={<Ethereum />} />
        <Route path="/solana" element={<Solana />} />
        <Route path="/shibainu" element={<ShibaInu />} />
        <Route path="/meme-coins" element={<MemeCoins />} />
        <Route path="/blockchain" element={<BlockChain />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/defi" element={<Defi />} />
        <Route path="/contact" element={<Contact />} /> {/* Add the route for Contact page */}
        <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} /> {/* Add the admin route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Chatbox /> {/* Add the Chatbox component here */}
    </AuthProvider>
  );
}

function HomeContent() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="featured">
        <Featured />
      </section>
      <section id="signup">
        <Signup />
      </section>
    </>
  );
}

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/auth" />;
}

export default App;
