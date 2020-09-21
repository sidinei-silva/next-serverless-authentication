import axios from 'axios';
import React, { FormEvent } from 'react';

// import { Container } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    axios
      .post('/api/login', { email, password })
      .then(response => {
        alert(
          `Email: ${response.data.email}\rSenha: ${response.data.password}`
        );
      })
      .catch(err => {
        alert(err.message);
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
