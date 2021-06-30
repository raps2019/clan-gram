import React from 'react';
import * as Styled from './Authentication.styles';
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <Styled.PageContainer>
      <Styled.Form
      form={"login"}>
        <Styled.Heading>ClanGram</Styled.Heading>
        <Styled.FieldContainer>
          <Styled.Input type="email" placeholder=" " required></Styled.Input>
          <Styled.Label>Email</Styled.Label>
        </Styled.FieldContainer>
        <Styled.FieldContainer>
          <Styled.Input type="password" placeholder=" " required></Styled.Input>
          <Styled.Label>Password</Styled.Label>
        </Styled.FieldContainer>
        <Styled.Button type="submit" form={"login"}>LOGIN</Styled.Button>
        <Styled.Text>Don't have an account? <Link to="/signup">SIGNUP</Link></Styled.Text>
        <Styled.SmallText>Forgot Password? <Link to="/forgot-password">RESET</Link></Styled.SmallText>
      </Styled.Form>
    </Styled.PageContainer>
  );
};

export default Login;
