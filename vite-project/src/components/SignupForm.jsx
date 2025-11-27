
import React from 'react';
import '../LoginPage.css';

const SignupForm = ({ onToggleForm }) => { 
    return (
        <div className="signup-container">
            <h2>
                <b>SIGN UP</b>
            </h2>
            <p>Enter your details to create an account</p> 
            
            <div className="login_form">

                {/* Name Input */}
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter Your Name" 
                    required 
                />

                {/* Email Input */}
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="📧 Enter Your Email" 
                    required 
                />

                {/* Password Input */}
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="🔒 Enter Your Password" 
                    required 
                />

                {/* Sign Up Button */}
                <div className="login-btn">
                    <button type="button">SIGN UP</button>
                </div>
                
                {/* OR / Sign In Link */}
                <div className="login-or">
                    <p>
                        <b>OR</b>
                    </p>
                    <p>
                        Already have an account? 
                        <a href="#" onClick={onToggleForm}>SIGN IN</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;