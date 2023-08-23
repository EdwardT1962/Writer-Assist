import React from 'react';

const TestSignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch('http://127.0.0.1:4001/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      alert(data.success);
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('An error occurred while signing up.');
    }
  };

  return (
    <div>
      <h1>Join Our Community</h1>
      <form id="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default TestSignUp;