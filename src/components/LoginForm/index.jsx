import { useState } from 'react';
import { Link } from 'react-router-dom';

import { InputsContainer, LoginContainer, LoginInput, LoginSubmit, LoginTitle } from '../styles';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <LoginContainer onSubmit={handleSubmit} data-cy="login-form">
      <LoginTitle data-cy="login-title">Login</LoginTitle>
      <InputsContainer>
        <LoginInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          data-cy="login-email"
        />
        <LoginInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          data-cy="login-password"
        />
      </InputsContainer>
      <LoginSubmit type="submit" data-cy="login-submit">
        Login
      </LoginSubmit>
      <Link to="/sign-up" data-cy="sign-up-link">
        Don&apos;t have an account?
      </Link>
    </LoginContainer>
  );
};

export default LoginForm;
