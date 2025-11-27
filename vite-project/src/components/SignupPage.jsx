
import React from 'react';
import SignupForm from './SignupForm';
import '../LoginPage.css';

// 1. Accept the onToggleForm prop
const SignupPage = ({ onToggleForm }) => { 
    return (
        <div className="signup-page">
            <main>
                {/* 2. Pass the onToggleForm prop down to the LoginForm */}
                <SignupForm onToggleForm={onToggleForm} />
            </main>
        </div>
    );
};

export default SignupPage;