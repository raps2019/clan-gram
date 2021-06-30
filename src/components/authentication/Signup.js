import React from 'react';
import * as Styled from './Authentication.styles';
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <Styled.PageContainer>
      <Styled.Form
      form={"signup"}>
        <Styled.Heading>ClanGram</Styled.Heading>
        <Styled.FieldContainer>
          <Styled.Input type="email" placeholder=" " required></Styled.Input>
          <Styled.Label>Email</Styled.Label>
        </Styled.FieldContainer>
        <Styled.FieldContainer>
          <Styled.Input type="password" placeholder=" " required></Styled.Input>
          <Styled.Label>Password</Styled.Label>
        </Styled.FieldContainer>
        <Styled.FieldContainer>
          <Styled.Input type="password" placeholder=" " required></Styled.Input>
          <Styled.Label>Confirm Password</Styled.Label>
        </Styled.FieldContainer>
        <Styled.Button type="submit" form={"signup"}>SIGN UP</Styled.Button>
        <Styled.Text>Have an account? <Link to="/login">LOGIN</Link></Styled.Text>
      </Styled.Form>
    </Styled.PageContainer>
  );
};

export default Signup;