import React from 'react';

const Navbar = ({ onLogout }) => {
  return (
    <nav>
      <a href="#home" className="mr-4">Home</a>
      <a href="#category" className="mr-4">Category</a>
      <a href="#about" className="mr-4">About</a>
      <a href="#contact" className="mr-4">Contact</a>
      <button onClick={onLogout} className="p-2 bg-red-500 text-white">Logout</button>
    </nav>
  );
};

export default Navbar;
