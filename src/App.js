import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageWithContent from './components/ImageWithContent';
import Footer from './components/Footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={isAuthenticated} onLogin={handleLogin} onSignup={handleSignup} onLogout={handleLogout} />
      <main className="flex-grow">
        <Hero />
        <ImageWithContent />
      </main>
      <Footer />
    </div>
  );
};

export default App;
