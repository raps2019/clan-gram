import React, {useContext} from 'react';
import * as Styled from './Navbar.styles';
import { ThemeContext } from '../../global/ThemeStore';

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Styled.NavbarContainer>
      <Styled.LeftContainer>
        <Styled.Logo to="/dashboard">FamGram</Styled.Logo>
      </Styled.LeftContainer>
      <Styled.CenterContainer>Search</Styled.CenterContainer>

      <Styled.RightContainer>
        <Styled.NavButton onClick={toggleTheme}>{ theme === 'light' ? 'Dark Mode' : 'Light Mode'}</Styled.NavButton>
        <Styled.NavButton>Logout</Styled.NavButton>
      </Styled.RightContainer>
    </Styled.NavbarContainer>
  );
};

export default Navbar;
