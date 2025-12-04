import React from 'react';
import '../LoginPage.css'; 

const LoginForm = ({ onToggleForm }) => {
    return (
        <div className="login-container">
            <h2><b>SIGN IN</b></h2>
            <p>Enter your email and password to login</p>

            <div className="login_form">
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    placeholder="📧 Enter Your Email"
                    required
                />

                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    placeholder="🔒 Enter Your Password"
                    required
                />

                <div className="login-btn">
                    <button type="button">SIGN IN</button>
                </div>

                <div className="login-or">
                    <p><b>OR</b></p>
                    <p>
                        Do not have an account?  
                        <a href="#" onClick={onToggleForm}> SIGN UP</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
