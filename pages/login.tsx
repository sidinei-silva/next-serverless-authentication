import { useRouter } from 'next/router';
import React, { FormEvent } from 'react';

import { login } from '../services/auth';

// import { Container } from './styles';

const Login: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await login(email, password)
      .then(res => {
        router.push('/');
      })
      .catch(error => {
        setErrorMessage(error.response.data.message || error.message);
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <h1>Login</h1>
      {errorMessage && (
        <p
          style={{
            padding: '10px',
            backgroundColor: '#e74c3c',
            color: '#fff'
          }}
        >
          {errorMessage}
        </p>
      )}
      <form
        onSubmit={onSubmit}
        style={{ border: '1px solid #ccc', padding: '25px 50px' }}
      >
        <h5>Email:</h5>
        <input
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <h5>Senha:</h5>
        <input
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <h5 style={{ textAlign: 'center' }}>
          <button type="submit">Entrar</button>
        </h5>
      </form>
    </div>
  );
};

export default Login;
