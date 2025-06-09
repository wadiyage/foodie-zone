import React, { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const DarkModeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
          const html = document.documentElement;
          html.setAttribute('data-theme', theme);
          localStorage.setItem('theme', theme);
      }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
    >
      {theme === 'dark' ? (
        <BsSun className='text-yellow-300 text-xl' />
      ) : (
        <BsMoon className='text-gray-700 text-xl' />
      )}
    </button>
  );
};

export default DarkModeToggle;
