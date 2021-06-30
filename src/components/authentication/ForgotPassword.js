import React from 'react';
import * as Styled from './Authentication.styles';
import { Link } from 'react-router-dom'


const ForgotPassword = () => {
  return (
    <Styled.PageContainer>
      <Styled.Form
      form={"forgotPassword"}>
        <Styled.Heading>ClanGram</Styled.Heading>
        <Styled.FieldContainer>
          <Styled.Input type="email" placeholder=" " required></Styled.Input>
          <Styled.Label>Email</Styled.Label>
        </Styled.FieldContainer>
        <Styled.Button type="submit" form={"forgotPassword"}>RESET</Styled.Button>
        <Styled.Text>Don't have an account? <Link to="/signup">SIGNUP</Link></Styled.Text>
        <Styled.SmallText>Back to <Link to="/login">LOGIN</Link></Styled.SmallText>
      </Styled.Form>
    </Styled.PageContainer>
  );
};

export default ForgotPassword;