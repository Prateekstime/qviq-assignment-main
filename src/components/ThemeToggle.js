import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'light');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-yellow-500 text-white shadow-xl rounded-md ">
      {theme === 'light' ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
    </button>
  );
};

export default ThemeToggle;
