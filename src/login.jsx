import {
  Button,
  Input,
  Label,
  makeStyles,
  Text,
  Title1
} from '@fluentui/react-components';
import { useState } from 'react';

const useStyles = makeStyles({
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    backgroundImage: "linear-gradient(rgba(12, 18, 32, 0.58), rgba(12, 18, 32, 0.58)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    background: 'rgba(255, 255, 255, 0.92)',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  title: {
    margin: 0,
    textAlign: 'center'
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  button: {
    marginTop: '8px'
  },
  error: {
    color: '#b91c1c',
    fontSize: '12px',
    margin: 0
  }
});

function Login({ onLogin }) {
  const styles = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!username.trim() || !password.trim()) {
      setError('Username and password are required.');
      return;
    }

    const isValid = onLogin(username.trim(), password);
    if (!isValid) {
      setError('Invalid username or password. Use admin/admin.');
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <Title1 as="h1" className={styles.title}>Login</Title1>

        <div className={styles.fieldGroup}>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(_, data) => {
              setUsername(data.value);
              if (error) setError('');
            }}
          />
        </div>

        <div className={styles.fieldGroup}>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(_, data) => {
              setPassword(data.value);
              if (error) setError('');
            }}
          />
        </div>

        {error ? <Text className={styles.error}>{error}</Text> : null}

        <Button appearance="primary" className={styles.button} onClick={handleSubmit}>
          Sign in
        </Button>
      </div>
    </div>
  );
}

export default Login;
