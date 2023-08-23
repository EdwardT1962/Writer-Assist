import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = ({ user }) => {
  const [userData, setUserData] = useState(user);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Fetch user profile data based on the authenticated user's ID
    fetchUserProfile(user.id);
  }, [user.id]);

  const fetchUserProfile = async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    // Send updated profile data to the server
    try {
      const response = await axios.patch(`/api/users/${user.id}`, {
        newUsername,
        newEmail,
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    // Send new password to the server for update
    try {
      await axios.post(`/api/users/${user.id}/change-password`, { password });
      // Show success message to the user
    } catch (error) {
      console.error('Error changing password:', error);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account? This action is irreversible.")) {
      try {
        // Send a request to the server to delete the user account
        await axios.delete(`/api/users/${user.id}`);
        // Redirect the user to the login page or home page after account deletion
        // You can implement this based on your routing setup
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    }
  };

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="user-profile">
        <img src={userData.profilePicture} alt="Profile" />
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
      </div>
      <div className="edit-profile">
        <h2>Edit Profile</h2>
        <form onSubmit={handleProfileUpdate}>
          {/* Editable fields */}
          <input
            type="text"
            placeholder="New Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="New Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button type="submit">Update Profile</button>
        </form>
      </div>
      <div className="change-password">
        <h2>Change Password</h2>
        <form onSubmit={handleChangePassword}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Change Password</button>
        </form>
      </div>
      <div className="delete-account">
        <button onClick={handleDeleteAccount}>Delete Account</button>
      </div>
    </div>
  );
};

export default ProfilePage;
