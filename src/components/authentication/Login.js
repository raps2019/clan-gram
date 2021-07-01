import React, {useState} from 'react';
import * as Styled from './Authentication.styles';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      history.push('/dashboard')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Styled.PageContainer>
      <Styled.Form formType={'login'} onSubmit={handleSubmit} disabled={loading}>
        <Styled.Heading>FamGram</Styled.Heading>
        <Styled.FieldContainer>
          <Styled.Input type="email" placeholder=" " onChange={(e) => setEmail(e.target.value)} required></Styled.Input>
          <Styled.Label>Email</Styled.Label>
        </Styled.FieldContainer>
        <Styled.FieldContainer>
          <Styled.Input type="password" placeholder=" " onChange={(e) => setPassword(e.target.value)} required></Styled.Input>
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
        {error ? <Styled.ErrorMessage>{error}</Styled.ErrorMessage> : null}
      </Styled.Form>
    </Styled.PageContainer>
  );
};

export default Login;
