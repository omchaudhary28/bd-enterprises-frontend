import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = ({ variant = 'icon', className = '' }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  // Sun icon
  const SunIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
    </svg>
  );

  // Moon icon
  const MoonIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );

  if (variant === 'pill') {
    return (
      <motion.button
        onClick={toggleTheme}
        className={`w-full flex items-center justify-center gap-3 px-6 py-3.5 min-h-[48px] rounded-xl font-semibold overflow-hidden relative border border-white/20 ${className}`}
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)'
            : 'linear-gradient(135deg, #6CA0B8 0%, #207C6A 100%)',
          color: 'white',
          boxShadow: isDark
            ? '0 4px 20px rgba(30, 58, 95, 0.4)'
            : '0 4px 20px rgba(108, 160, 184, 0.4)',
        }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        aria-label="Toggle theme"
      >
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          className="flex-shrink-0"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {isDark ? <MoonIcon /> : <SunIcon />}
        </motion.span>
        <span className="text-sm sm:text-base">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
      </motion.button>
    );
  }

  // Round button - icon transforms (sun ↔ moon) with animation
  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-full cursor-pointer select-none overflow-hidden border border-white/20 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary shadow-lg ${className}`}
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #334155 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        boxShadow: isDark
          ? '0 2px 12px rgba(15, 23, 42, 0.4)'
          : '0 2px 12px rgba(251, 191, 36, 0.35)',
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.span
        key={isDark ? 'moon' : 'sun'}
        initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={isDark ? 'text-amber-200' : 'text-amber-700'}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;
