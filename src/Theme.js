import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './contexts/ThemeStore';

const themes = {
  light: {
    // windowBackgroundColor : "white",
    // loginAccentColor : "#CAEEBE",
    // signupAccentColor : "#98E2F7",
    // resetPasswordAccentColor: "#FEC98F",
  },
  dark: {
    // windowBackgroundColor: "#121212",
    // loginAccentColor : "#79D45E",
    // signupAccentColor : "#31BFF3",
    // resetPasswordAccentColor: "#FFAF68",
  },
};

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
