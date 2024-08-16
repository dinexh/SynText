import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './auth.css';
import authImage from "../../Assets/Chat.gif";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    if (!email || !password || (!isSignIn && (!name || !confirmPassword))) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!isSignIn && password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Add your form handling logic here
    toast.success('Form submitted successfully!');
    console.log('Form submitted', { email, password, name, confirmPassword });
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <div className="auth-container-in">
        <div className="auth-container-in-one">
          <div className="auth-group-form">
            {isSignIn ? (
              <form onSubmit={handleSubmit}>
                <div className="auth-form-heading">
                  <h1>Sign In</h1>
                </div>
                <div className="auth-form-group">
                  <label htmlFor="email-signin">Email:</label>
                  <input 
                    id="email-signin" 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </div>
                <div className="auth-form-group">
                  <label htmlFor="password-signin">Password:</label>
                  <input 
                    id="password-signin" 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="auth-form-group">
                  <button type="submit" className="signinbutton">Sign In</button>
                </div>
                <div className="auth-form-group">
                  <p>Don't have an account? <span className="auth-toggle" onClick={toggleForm}>Sign Up</span></p>
                </div>
                <div className="auth-form-group">
                  <Link to="/" className="back-home-link">
                    <button>
                      <p>Back Home</p>
                    </button>
                  </Link>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="auth-form-heading">
                  <h1>Get Started</h1>
                </div>
                <div className="auth-form-group">
                  <label htmlFor="name">Name:</label>
                  <input 
                    id="name" 
                    type="text" 
                    placeholder="Enter your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="auth-form-group">
                  <label htmlFor="email-signup">Email:</label>
                  <input 
                    id="email-signup" 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="auth-form-group">
                  <label htmlFor="password-signup">Password:</label>
                  <input 
                    id="password-signup" 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="auth-form-group">
                  <label htmlFor="confirm-password">Confirm Password:</label>
                  <input 
                    id="confirm-password" 
                    type="password" 
                    placeholder="Confirm your password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="auth-form-group">
                  <button type="submit">Sign Up</button>
                </div>
                <div className="auth-form-group" id="phone">
                  <button>
                    <FontAwesomeIcon icon={faPhone} /> 
                    Sign up with number
                  </button>
                </div>
                <div className="auth-form-group">
                  <Link to="/" className="back-home-link">
                    <button>
                      <p>Back Home</p>
                    </button>
                  </Link>
                </div>
                <div className="auth-form-group">
                  <p>Already have an account? <span className="auth-toggle" onClick={toggleForm}>Sign In</span></p>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="auth-container-in-two">
          <div className="auth-container-two-image">
            <img src={authImage} alt="Auth" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
