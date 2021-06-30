import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './contexts/ThemeStore'

const themes = {

  light: {
    window: { backgroundColor: "white"},
  },

  dark: {
    window: { backgroundColor: "#272823"},

    // button: { 
    //   backgroundColor: 'black',
    //   color: 'white',
    //  }

  },
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
