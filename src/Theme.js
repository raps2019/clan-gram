import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './contexts/ThemeStore'

const themes = {
  dark: {
    background: "#272823",
    text: "#fff"
  },
  light: {
    background: "#fff",
    text: "000"
  }
}

const Theme = ({children}) => {
  const { theme } = useContext( ThemeContext )
  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  )
}

export default Theme;
