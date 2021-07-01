import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Theme from './Theme';
import { ThemeStore } from './contexts/ThemeStore';
import * as Styled from './GlobalStyle';
import GlobalStyle from './GlobalStyle';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import ResetPassword from './components/authentication/ResetPassword';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <>
      <ThemeStore>
        <Theme>
          <GlobalStyle />
          <AuthProvider>
            <Styled.WindowContainer>
              {/* <ToggleThemeButton></ToggleThemeButton> */}
              <Router>
                <Switch>
                  <Route path="/signup" component={Signup}></Route>
                  <Route path="/login" component={Login}></Route>
                  <Route
                    path="/forgot-password"
                    component={ResetPassword}
                  ></Route>
                  <Route path="/dashboard" component={Dashboard}></Route>
                </Switch>
              </Router>
            </Styled.WindowContainer>
          </AuthProvider>
        </Theme>
      </ThemeStore>
    </>
  );
};

export default App;
