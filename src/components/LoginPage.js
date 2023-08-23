import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const LoginPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      setError('An error occurred while logging in.');
    }
  };

  return (
    <div className="login-page-container">
      <h1 className="login-title">Welcome Back!</h1>
      <img src={`${process.env.PUBLIC_URL}/LoginPage-Community.png`} alt='Community of Authors' className="login-image" />
      <p className="login-intro-text">Login to continue your journey with our community. Access your projects, connect with fellow authors, and explore new opportunities.</p>
      {error && <div className="error-message">{error}</div>}
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
