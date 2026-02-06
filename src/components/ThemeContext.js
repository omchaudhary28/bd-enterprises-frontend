import React, { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const shouldUseDark = savedTheme
      ? savedTheme === 'dark'
      : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((previous) => {
      const nextValue = !previous;
      document.documentElement.classList.toggle('dark', nextValue);
      localStorage.setItem('theme', nextValue ? 'dark' : 'light');
      return nextValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};