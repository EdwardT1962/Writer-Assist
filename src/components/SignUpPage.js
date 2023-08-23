import React, { useState } from 'react';
import Footer from './Footer';

const SignUpPage = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.status !== 200) {
        const data = await response.json();
        setError(data.error);
        return;
      }

      const data = await response.json();
      setSuccess(data.success);
    } catch (error) {
      console.error('Error during sign up:', error);
      setError('An error occurred while signing up.');
    }
  };

  return (
    <div className="sign-up-page">
      <h1>Join Our Community</h1>
      <img src={`${process.env.PUBLIC_URL}/SignUpPage-Community.png`} alt='Community of Authors' className="community-image" />
      <p className="intro-text">Become a part of our vibrant community of authors, publishers, and readers. Sign up to access exclusive tools, resources, and opportunities to grow your writing career.</p>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <div className="sign-up-form-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />

          <button type="submit">Sign Up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
