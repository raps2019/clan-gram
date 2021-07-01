import React from 'react';
import * as Styled from './Authentication.styles';

const Login = () => {
  return (
    <Styled.PageContainer>
      <Styled.Form formType={'login'}>
        <Styled.Heading>FamGram</Styled.Heading>
        <Styled.FieldContainer>
          <Styled.Input type="email" placeholder=" " required></Styled.Input>
          <Styled.Label>Email</Styled.Label>
        </Styled.FieldContainer>
        <Styled.FieldContainer>
          <Styled.Input type="password" placeholder=" " required></Styled.Input>
          <Styled.Label>Password</Styled.Label>
        </Styled.FieldContainer>
        <Styled.Button type="submit" formType={'login'}>
          LOGIN
        </Styled.Button>
        <Styled.Text>
          Don't have an account? <Styled.RouteLink to="/signup">Sign up</Styled.RouteLink>
        </Styled.Text>
        <Styled.SmallText>
          Forgot Password? <Styled.RouteLink to="/forgot-password">Reset</Styled.RouteLink>
        </Styled.SmallText>
      </Styled.Form>
    </Styled.PageContainer>
  );
};

export default Login;
