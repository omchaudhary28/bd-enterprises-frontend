import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = ({ variant = 'icon', className = '' }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  if (variant === 'pill') {
    return (
      <button
        onClick={toggleTheme}
        className={`w-full flex items-center justify-center gap-2 bg-accent dark:bg-blue-500 text-primary dark:text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 font-semibold active:scale-95 ${className}`}
        aria-label="Toggle theme"
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center w-10 h-10 rounded-full bg-accent dark:bg-blue-500 text-primary dark:text-white hover:scale-110 transition-transform duration-300 shadow-md active:scale-95 no-transition ${className}`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0M17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1M5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM14.95 6.464a1 1 0 10-1.414-1.414l-.707.707a1 1 0 101.414 1.414zM5 11a1 1 0 100-2H4a1 1 0 100 2h1" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
