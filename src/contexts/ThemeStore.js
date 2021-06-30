import React, { useState } from 'react';

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme( prevDarkTheme => prevDarkTheme === 'light' ? 'dark' : 'light' );
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
