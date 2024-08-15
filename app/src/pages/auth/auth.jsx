import './auth.css';
import React, { useState } from 'react';
import authImage from "../../Assets/auth-gif-2.gif";
import { Link } from 'react-router-dom'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Sign-In Error:", error);
  };

  return (
    <GoogleOAuthProvider clientId="735121826418-5b8939n6t7tj8e6d2eiesn1rhcvivfs2.apps.googleusercontent.com">
      <div className="auth-container">
        <div className="auth-container-in">
          <div className="auth-container-in-one">
            <div className="auth-group-form">
              {isSignIn ? (
                <form action="">
                  <div className="auth-form-heading">
                    <h1>Sign In</h1>
                  </div>
                  <div className="auth-form-group">
                    <label htmlFor="email-signin">Email:</label>
                    <input id="email-signin" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="auth-form-group">
                    <label htmlFor="password-signin">Password:</label>
                    <input id="password-signin" type="password" placeholder="Enter your password" />
                  </div>
                  <div className="auth-form-group">
                    <button type="submit">Sign In</button>
                  </div>
                  <div className="auth-form-group">
                    <p>Don't have an account? <span className="auth-toggle" onClick={toggleForm}>Sign Up</span></p>
                  </div>
                  <div className="auth-form-group">
                  <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleFailure}
                    />
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
                <form action="">
                  <div className="auth-form-heading">
                    <h1>Get Started</h1>
                  </div>
                  <div className="auth-form-group">
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" placeholder="Enter your name" />
                  </div>
                  <div className="auth-form-group">
                    <label htmlFor="email-signup">Email:</label>
                    <input id="email-signup" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="auth-form-group">
                    <label htmlFor="password-signup">Password:</label>
                    <input id="password-signup" type="password" placeholder="Enter your password" />
                  </div>
                  <div className="auth-form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input id="confirm-password" type="password" placeholder="Confirm your password" />
                  </div>
                  <div className="auth-form-group">
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleFailure}
                    />
                  </div>
                  <div className="auth-form-group">
                    <button type="submit">Sign Up</button>
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
              <img src={authImage} className='AuthImage' alt="Authentication" />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Auth;
