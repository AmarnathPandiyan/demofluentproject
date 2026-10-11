import { useEffect, useState } from 'react';
import Login from './login';
import Dashboard from './Home/dashboard';

function PublicPage({ title, description, onNavigate }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #e0f2fe, #f8fafc)',
      padding: '24px'
    }}>
      <div style={{
        maxWidth: '700px',
        width: '100%',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 12px 30px rgba(15, 23, 42, 0.12)',
        padding: '32px',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: '0 0 12px', fontSize: '42px', color: '#0f172a' }}>{title}</h1>
        <p style={{ margin: '0 0 20px', color: '#475569', fontSize: '18px', lineHeight: 1.6 }}>{description}</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <button type="button" onClick={() => onNavigate('/home')} style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid #cbd5e1', background: '#fff', cursor: 'pointer' }}>Home</button>
          <button type="button" onClick={() => onNavigate('/register')} style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid #cbd5e1', background: '#fff', cursor: 'pointer' }}>Register</button>
          <button type="button" onClick={() => onNavigate('/contact')} style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid #cbd5e1', background: '#fff', cursor: 'pointer' }}>Contact</button>
          <button type="button" onClick={() => onNavigate('/dashboard')} style={{ padding: '10px 16px', borderRadius: '10px', border: 'none', background: '#2563eb', color: '#fff', cursor: 'pointer' }}>Dashboard</button>
        </div>
      </div>
    </div>
  );
}

function HomePage({ onNavigate }) {
  return (
    <PublicPage
      title="Home"
      description="Welcome to the POS Dashboard home page. Use the menu to move between public pages or open the dashboard."
      onNavigate={onNavigate}
    />
  );
}

function RegisterPage({ onNavigate }) {
  return (
    <PublicPage
      title="Register"
      description="Create a new account to begin managing orders, customers, and reports from the POS system."
      onNavigate={onNavigate}
    />
  );
}

function ContactPage({ onNavigate }) {
  return (
    <PublicPage
      title="Contact"
      description="Need support? Reach us at support@posdemo.com or call +1 (800) 555-0199 for help with your POS reporting system."
      onNavigate={onNavigate}
    />
  );
}

function ProtectedRoute({ isAuthenticated, onLogout, onNavigate }) {
  if (!isAuthenticated) {
    return null;
  }

  return <Dashboard onLogout={onLogout} onNavigate={onNavigate} />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const [route, setRoute] = useState(() => {
    return window.location.pathname || '/login';
  });

  const navigate = (nextRoute) => {
    window.history.pushState({}, '', nextRoute);
    setRoute(nextRoute);
  };

  useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname || '/login');
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      navigate('/dashboard');
      return true;
    }

    localStorage.setItem('isAuthenticated', 'false');
    setIsAuthenticated(false);
    return false;
  };

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    setIsAuthenticated(false);
    navigate('/login');
  };

  const effectiveRoute = !isAuthenticated && route === '/dashboard' ? '/login' : route;

  if (effectiveRoute === '/dashboard') {
    return <ProtectedRoute isAuthenticated={isAuthenticated} onLogout={handleLogout} onNavigate={navigate} />;
  }

  if (effectiveRoute === '/home') {
    return <HomePage onNavigate={navigate} />;
  }

  if (effectiveRoute === '/register') {
    return <RegisterPage onNavigate={navigate} />;
  }

  if (effectiveRoute === '/contact') {
    return <ContactPage onNavigate={navigate} />;
  }

  return <Login onLogin={handleLogin} />;
}

export default App;