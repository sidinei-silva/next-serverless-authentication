import React, { FormEvent } from 'react';

// import { Container } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert(`email: ${email}`);
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
