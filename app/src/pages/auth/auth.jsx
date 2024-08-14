import './auth.css';
import React from 'react';
import authImage from "../../Assets/auth-gif-2.gif";
const Auth = () => {
  return (
        <div className="auth-container">
            <div className="auth-container-in">
                    <div className="auth-container-in-one">
                    
                    </div>
                    <div className="auth-container-in-two">
                        <div className="auth-container-two-image">
                            <img src={authImage} className='AuthImage' alt="" />
                        </div>
                    </div>
            </div>
        </div>
  );
}

export default Auth;
