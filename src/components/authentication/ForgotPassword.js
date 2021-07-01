import React from 'react';
import * as Styled from './Authentication.styles';

const ForgotPassword = () => {
  return (
    <Styled.PageContainer>
      <Styled.Form formType={'forgotPassword'}>
        <Styled.Heading>FamGram</Styled.Heading>
        <Styled.FieldContainer>
          <Styled.Input type="email" placeholder=" " required></Styled.Input>
          <Styled.Label>Email</Styled.Label>
        </Styled.FieldContainer>
        <Styled.Button type="submit" formType={'forgotPassword'}>
          RESET
        </Styled.Button>
        <Styled.Text>
          Don't have an account? <Styled.RouteLink to="/signup">Signup</Styled.RouteLink>
        </Styled.Text>
        <Styled.SmallText>
          Back to <Styled.RouteLink to="/login">Login</Styled.RouteLink>
        </Styled.SmallText>
      </Styled.Form>
    </Styled.PageContainer>
  );
};

export default ForgotPassword;
