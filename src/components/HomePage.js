import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './HomePage.css';

const HomePage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const email = `${phoneNumber}@example.com`;
      const password = 'someSecurePassword';
      await createUserWithEmailAndPassword(auth, email, password);
      
      // Navigate to NavigationPage with username
      navigate('/Map', { state: { username } });
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="homepage-container">
      <div className="logo">
        <span className="rail">RAIL</span>
        <span className="go">GO</span>
        <img src="/path/to/your/train_logo.png" alt="Train Logo" className="train-logo" />
      </div>
      
      <h1 className="login-title">LOGIN</h1>
      
      <form className="login-form" onSubmit={handleRegister}>
        <div className="input-container">
          <label>Phone No</label>
          <div className="input-with-icon">
            <span className="country-code">+91</span>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        
        <div className="input-container">
          <label>User Name</label>
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <button type="submit" className="register-button">Register</button>
      </form>
      
      <footer className="footer">
        <p>Proudly Made in India <span role="img" aria-label="Indian Flag">🇮🇳</span></p>
      </footer>
    </div>
  );
};

export default HomePage;
