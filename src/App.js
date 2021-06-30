import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Theme from './Theme';
import { ThemeStore } from './contexts/ThemeStore';
import * as Styled from './GlobalStyle';
import GlobalStyle from './GlobalStyle';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import ForgotPassword from './components/authentication/ForgotPassword';

const App = () => {
  return (
    <>
      <ThemeStore>
        <Theme>
          <GlobalStyle />
          <Styled.WindowContainer
          >
            <Router>
              <Switch>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/login" component={Login}></Route>
                <Route
                  path="/forgot-password"
                  component={ForgotPassword}
                ></Route>
              </Switch>
            </Router>
          </Styled.WindowContainer>
        </Theme>
      </ThemeStore>
    </>
  );
};

export default App;
