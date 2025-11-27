
import React from 'react';
import LoginForm from './LoginForm';
import '../LoginPage.css';

// 1. Accept the onToggleForm prop
const LoginPage = ({ onToggleForm }) => { 
    return (
        <div className="login-page">
            <main>
                {/* 2. Pass the onToggleForm prop down to the LoginForm */}
                <LoginForm onToggleForm={onToggleForm} />
            </main>
        </div>
    );
};

export default LoginPage;