import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';

const Header = ({ isAuthenticated, onLogin, onSignup, onLogout }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 relative z-10">
      <div className="text-xl font-bold">Logo</div>
      {isAuthenticated ? (
        <Navbar onLogout={onLogout} />
      ) : (
        <div>
          <button onClick={() => setIsLoginOpen(true)} className="mr-4 p-2 hover:shadow-lg  bg-blue-500 text-white hover:bg-cyan-500 rounded-lg">Login</button>
          <button onClick={() => setIsSignupOpen(true)} className="p-2 ml-5 bg-green-500 text-white hover:bg-green-600 rounded-lg hover:shadow-xl">Signup</button>
        </div>
      )}
      <ThemeToggle />
      {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} onLogin={onLogin} />}
      {isSignupOpen && <Signup onClose={() => setIsSignupOpen(false)} onSignup={onSignup} />}
    </header>
  );
};

export default Header;
