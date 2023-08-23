import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CommunityPage from './components/CommunityPage';
import ContactPage from './components/ContactPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage'; // Import ProfilePage
import TestSignUp from './components/TestSignUp'; // Import TestSignUp

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/test-signup" element={<TestSignUp />} /> {/* Add TestSignUp route */}
          <Route path="/profile" element={<ProfilePage />} /> {/* Add ProfilePage route */}
          {/* Add additional routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
