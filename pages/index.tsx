import Axios from 'axios';
import Head from 'next/head';
import React, { useEffect } from 'react';

import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [users, setUsers] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  const getUsers = async () => {
    await Axios.get('/api/users')
      .then(response => setUsers(response.data.data))
      .catch(err => setErrorMessage(err.message));
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.description}>Users list</p>

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

        <table style={{ border: '1px solid #ccc', width: '600px' }}>
          <tr style={{ backgroundColor: '#ecf0f1' }}>
            <th
              style={{
                fontWeight: 'bold',
                padding: '10px 20px'
              }}
            >
              Name
            </th>
            <th style={{ fontWeight: 'bold', padding: '10px 20px' }}>Email</th>
          </tr>
          {users &&
            users.map(user => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </table>
      </main>
    </div>
  );
};

export default Home;
