import React, { useState } from 'react';
import * as Styled from './Authentication.styles';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const history = useHistory();

  const handleSubmit=



  return (
    <Styled.PageContainer>
      <Styled.Form formType={'resetPassword'} onSubmit={handleSubmit} disabled={loading}>
        <Styled.Heading>FamGram</Styled.Heading>
        <Styled.FieldContainer>
          <Styled.Input type="email" placeholder=" " required></Styled.Input>
          <Styled.Label>Email</Styled.Label>
        </Styled.FieldContainer>
        <Styled.Button type="submit" formType={'resetPassword'}>
          RESET
        </Styled.Button>
        <Styled.Text>
          Don't have an account?{' '}
          <Styled.RouteLink to="/signup">Signup</Styled.RouteLink>
        </Styled.Text>
        <Styled.SmallText>
          Back to <Styled.RouteLink to="/login">Login</Styled.RouteLink>
        </Styled.SmallText>
      </Styled.Form>
    </Styled.PageContainer>
  );
};

export default ResetPassword;
